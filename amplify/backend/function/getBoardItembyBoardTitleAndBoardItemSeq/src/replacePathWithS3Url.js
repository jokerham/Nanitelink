/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const bucketName = `${process.env.ATTACHMENT_BUCKET_NAME}-${process.env.ENV}`;

const replacePathWithS3Url = async (content) => {
  const s3KeyRegex = /"(public\/attachments\/[^"]+)"/g;
  const matches = [...content.matchAll(s3KeyRegex)]; // Use matchAll for capturing groups
  
  if (!matches.length) return content;
  
  // Generate signed URLs for each S3 key
  const urlMapping = await Promise.all(
    matches.map(async (match) => {
      const key = match[1]; // Access the capturing group
      const params = {Bucket: bucketName, Key: key};
      const response = await s3.getSignedUrl('getObject', params);
      return { key, signedUrl: response };
    })
  );
  
  // Replace S3 keys with signed URLs in the content
  let updatedContent = content;
  urlMapping.forEach(({ key, signedUrl }) => {
    if (signedUrl) {
      updatedContent = updatedContent.replaceAll(`"${key}"`, `"${signedUrl}"`);
    }
  });

  return updatedContent;
};

module.exports = { replacePathWithS3Url };