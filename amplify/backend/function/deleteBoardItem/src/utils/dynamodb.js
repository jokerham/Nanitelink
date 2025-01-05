/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const AWS = require('aws-sdk');
const { getTableName } = require('./amplify');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

async function getBoardItem(boardItemId) {
  const TableName = getTableName('BoardItem');
  const params = {
    TableName,
    Key: { id: boardItemId }
  };

  const result = await dynamoDB.get(params).promise();
  return result.Item;
}

async function getAttachments(boardItemId) {
  const TableName = getTableName('Attachment');
  const params = {
    TableName,
    IndexName: 'gsi-BoardItem.attachments',
    KeyConditionExpression: 'boardItemAttachmentsId = :id',
    ExpressionAttributeValues: { ':id': boardItemId }
  };

  const result = await dynamoDB.query(params).promise();
  return result.Items;
}

async function deleteBoardItem(boardItemId) {
  const TableName = getTableName('BoardItem');
  const params = {
    TableName,
    Key: { id: boardItemId }
  };

  await dynamoDB.delete(params).promise();
}
/**
 * Deletes attachments from DynamoDB based on a list of attachment IDs.
 * @param {string[]} attachmentIds - List of attachment IDs to delete.
 */
async function deleteAttachments(attachmentIds) {
  const TableName = getTableName('Attachment');

  // Split into batches of 25 items, as DynamoDB batchWrite has a limit of 25 items per request
  const batches = [];
  while (attachmentIds.length) {
    batches.push(attachmentIds.splice(0, 25));
  }

  // Process each batch
  for (const batch of batches) {
    const deleteRequests = batch.map((id) => ({
      DeleteRequest: {
        Key: { id }
      }
    }));

    const params = {
      RequestItems: {
        [TableName]: deleteRequests
      }
    };

    await dynamoDB.batchWrite(params).promise();
  }
}


module.exports = { getBoardItem, getAttachments, deleteBoardItem, deleteAttachments };