/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const { getAmplifyTableName } = require('/opt/shared/commonFunction');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

/**
 * Get Attachments from DynamoDB using boardItemAttachmentsId.
 * @param {string} boardItemAttachmentsId - The ID of the board item attachments to query.
 * @returns {Promise<Array>} - The list of attachments that match the boardItemAttachmentsId.
 * @throws {Error} - Throws an error if DynamoDB query fails.
 */
const getAttachments = async (boardItemAttachmentsId, process) => {
  try {
    // Validate input
    if (!boardItemAttachmentsId || typeof boardItemAttachmentsId !== 'string') {
      throw(new Error('Invalid boardItemAttachmentsId. Must be a non-empty string.'));
    }

    // Define DynamoDB query parameters
    const attachmentTable = getAmplifyTableName('Attachment', process); // Helper to resolve table name
    const params = {
      TableName: attachmentTable,
      IndexName: 'gsi-BoardItem.attachments', // Index name from the screenshot
      KeyConditionExpression: 'boardItemAttachmentsId = :boardItemAttachmentsId',
      ExpressionAttributeValues: {
        ':boardItemAttachmentsId': boardItemAttachmentsId,
      },
    };

    // Query DynamoDB
    const result = await dynamoDb.query(params).promise();

    // Return attachments if found
    if (result.Items && result.Items.length > 0) {
      return result.Items; // Return the list of attachments
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    throw(error);
  }
};

module.exports = { getAttachments };