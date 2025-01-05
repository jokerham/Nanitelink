import { Box, Button } from '@mui/material';
import { FlexBox } from 'component/CustomMaterialUI';
import { IFileField, TFormFieldProps } from 'component/FormBuilder';
import { IFileValue } from 'component/FormBuilder/types';
import { formatFileSize } from 'function/formatFileSize';
import React, { useState } from 'react';
import { remove } from 'aws-amplify/storage';
import { showToast } from 'function/showToast';

export const MUIDefault: React.FC<TFormFieldProps> = ({ field, formik }) => {
  const fileField = field as IFileField;
  const [files, setFiles] = useState<IFileValue[]>(formik.values[field.name]);

  if (formik.values[field.name].length != files.length) {
    const tmpFiles = formik.values[field.name];
    setFiles(tmpFiles);
  }

  const getVideoThumbnail = (videoUrl: string): Promise<string> => {
    const video = document.createElement('video');
    video.src = videoUrl;
  
    const canvas = document.createElement('canvas');
    return new Promise<string>((resolve) => {
      video.addEventListener('loadeddata', () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        video.currentTime = 1; // Capture a frame at 1 second
        video.addEventListener('seeked', () => {
          context?.drawImage(video, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/png')); // Return thumbnail as Base64 string
        });
      });
    });
  };

  const loadThumnail = async (e: React.SyntheticEvent<HTMLImageElement, Event>, file: IFileValue) => {
    // Handle non-image files or videos
    if (file.file && file.filetype.startsWith('video')) {
      const blobUrl = URL.createObjectURL(file.file); // Generate a Blob URL
      try {
        const thumbnail = await getVideoThumbnail(blobUrl);
        (e.target as HTMLImageElement).src = thumbnail; // Set thumbnail as image source
      } catch (error) {
        // Set fallback to display the FaRegFloppyDisk icon
        (e.target as HTMLImageElement).src = ''; // Clear src
        (e.target as HTMLImageElement).alt = 'Fallback Icon';
        (e.target as HTMLImageElement).dataset.error = 'true'; // Add data attribute to identify fallback
      } finally {
        URL.revokeObjectURL(blobUrl); // Revoke Blob URL to free memory
      }
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
  
      const getFileType = (fileName: string): string => {
        if (fileName.match(/\.(jpeg|jpg|png|gif)$/i)) {
          return 'image';
        } else if (fileName.match(/\.(mp4|webm|ogg|mp3|wav)$/i)) {
          return fileName.match(/\.(mp4|webm|ogg)$/i) ? 'video' : 'audio';
        } else if (fileName.match(/\.zip$/i)) {
          return 'zip';
        } else {
          return 'other';
        }
      };
  
      const fileType = getFileType(file.name);

      setFiles((prevFiles) => {
        const fileAlreadyExists = prevFiles.some(
          (prevFile) => prevFile.filename === file.name && prevFile.fileSize === file.size
        );
        if (!fileAlreadyExists) {
          const updatedFiles = [
            ...prevFiles,
            { filename: file.name, filetype: fileType, fileSize: file.size, path: url, file: file },
          ];
  
          // Update Formik field with the new files array
          formik.setFieldValue(field.name, updatedFiles);
  
          return updatedFiles;
        }
        return prevFiles; // If file exists, don't add it again
      });
  
      // Reset file input value
      event.target.value = '';
    }
  };

  const handleDeleteFile = (index: number) => {
    const deleteFileinS3 = async (file: IFileValue) => {
      // Check if the file is uploaded to S3
      if (file.signedUrl) {
        try {
          // Make a DELETE request to the S3 API
          await remove({ path: file.path });
        } catch (error) {
          showToast('Error deleting file', 'error');
        }
      }
    };

    setFiles((prevFiles) => {
      const fileToDelete = prevFiles[index];
      const updatedFiles = prevFiles.filter((_, i) => i !== index);

      // Delete the file from S3
      deleteFileinS3(fileToDelete);
  
      // Update Formik field with the updated files array
      formik.setFieldValue(field.name, updatedFiles);
  
      // Dynamically remove the corresponding tag from the content
      const contentId = fileField.options.contentId;
      const content = formik.values[contentId];
  
      // Create a temporary DOM element to parse the content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
  
      // Use file type to determine the tag to remove
      const filePath = fileToDelete.signedUrl ?? fileToDelete.path;
      switch (fileToDelete.filetype) {
        case 'image': {
          const imgTag = tempDiv.querySelector(`img[src="${filePath}"]`);
          if (imgTag) imgTag.remove();
          break;
        }
        case 'video':
        case 'audio': {
          const mediaTag = tempDiv.querySelector(
            `${fileToDelete.filetype}[src="${filePath}"]`
          );
          if (mediaTag) mediaTag.remove();
          break;
        }
        case 'other': {
          const linkTag = tempDiv.querySelector(`a[href="${filePath}"]`);
          if (linkTag) linkTag.remove();
          break;
        }
        default:
          break;
      }
  
      // Update the content field with the modified HTML
      formik.setFieldValue(contentId, tempDiv.innerHTML);
  
      return updatedFiles;
    });
  };

  const handleInsertToContent = (file: IFileValue) => {
    const contentId = fileField.options.contentId;
    const content = formik.values[contentId];
    let updatedContent = content;
  
    // Map file type to appropriate HTML
    const fileTypeToHTML: { [key: string]: string } = {
      image: `<img src="${file.path}" alt="${file.filename}" style="max-width: 100%; height: auto;" />`,
      video: `<video src="${file.path}" controls style="max-width: 100%; height: auto;"></video>`,
      audio: `<audio src="${file.path}" controls></audio>`,
      other: `<a href="${file.path}" download="${file.filename}" style="display: block;">
                <span style="font-size: 14px; color: #000;">📁 Download: ${file.filename}</span>
              </a>`,
    };
  
    // Append HTML based on file type
    updatedContent += fileTypeToHTML[file.filetype as keyof typeof fileTypeToHTML] || '';
  
    // Update the content field
    formik.setFieldValue(contentId, updatedContent);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '100%' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '10px',
          cursor: 'pointer',
          backgroundColor: '#f1f1f1',
          padding: '8px',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        <input
          type="file"
          accept="image/*,video/*,audio/*,.zip,application/zip,application/x-zip-compressed"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
        Attach
      </label>
      {files.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          {files.map((file, index) => (
            <FlexBox key={index} >
              <img
                src={file.signedUrl ?? file.path}
                alt={file.filename}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginRight: '10px',
                }}
                onError={(e) => loadThumnail(e, file)}
              />
              <div style={{ flex: 1 }}>
                <div>{file.filename}</div>
                <div style={{ fontSize: '12px', color: '#888' }}>
                  {formatFileSize(file.fileSize)}
                </div>
              </div>
              <FlexBox sx={{gap: 1, margin: 'auto 0 auto 0'}}>
                <Box>
                  <Button variant="contained" onClick={() => handleInsertToContent(file)} >
                    Insert to Content
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" onClick={() => handleDeleteFile(index)} >
                    Delete Selected
                  </Button>
                </Box>
              </FlexBox>
            </FlexBox>
          ))}
        </div>
      )}
    </div>
  );
};
