/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

async function deleteS3Objects(attachments) {
  const deleteParams = {
    Bucket: process.env.STORAGE_PROFILEIMAGES_BUCKETNAME,
    Delete: {
      Objects: attachments.map((attachment) => ({ Key: attachment.path }))
    }
  };

  await s3.deleteObjects(deleteParams).promise();
}

module.exports = { deleteS3Objects };