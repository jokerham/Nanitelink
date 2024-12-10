import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Box } from '@mui/material';
import { ClassicEditor } from 'ckeditor5';
import { CKEditorConfig } from './config';
import { TOnChangeHandler } from 'component/FormBuilder';

interface ICKEditorTemplateProps {
  value: string;
  onChange: TOnChangeHandler
}

export const CKEditorTemplate = (props: ICKEditorTemplateProps) => {
  const { value, onChange } = props;
  const content = value;
  const setContent = (content: string) => {
    onChange(content);
  };
  
  return (
    <Box sx={{marginBottom: '-10px', padding: 0, height: '600px', width: '100%'}}>
      <CKEditor 
        id='editor'
        editor={ ClassicEditor }
        config={ CKEditorConfig }
        data={content}
        onChange={(event, editor) => { setContent( editor.getData() ); }}
      />
    </Box>
  );
};