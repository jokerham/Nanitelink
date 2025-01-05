/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const { getAmplifyTableName } = require('/opt/shared/commonFunction');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

/**
 * Get a BoardItem from DynamoDB using boardId and seq.
 * @param {string} boardId - The board ID to query.
 * @param {number} seq - The sequence number of the BoardItem.
 * @returns {Promise<Object>} - The BoardItem that matches the boardId and seq.
 * @throws {Error} - Throws an error if BoardItem is not found or a DynamoDB error occurs.
 */
const getBoardItem = async (boardId, seq, process) => {
  console.log({boardId, seq, process});
  try {
    // Validate inputs
    if (!boardId || typeof boardId !== 'string') {
      throw new Error('Invalid boardId. Must be a non-empty string.');
    }
    if (typeof seq !== 'number') {
      throw new Error('Invalid seq. Must be a number.');
    }

    // Define DynamoDB query parameters
    const boardItemTable = getAmplifyTableName('BoardItem', process);
    const params = {
      TableName: boardItemTable, // Replace with your actual table name
      IndexName: 'byBoard', // GSI name created by Amplify
      KeyConditionExpression: 'boardId = :boardId AND seq = :seq',
      ExpressionAttributeValues: {
        ':boardId': boardId,
        ':seq': seq,
      },
    };

    // Query DynamoDB
    const result = await dynamoDb.query(params).promise();

    // Check if a matching BoardItem exists
    if (result.Items && result.Items.length > 0) {
      return result.Items[0]; // Return the first matching item
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    throw(error);
  }
};

module.exports = { getBoardItem };