/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const { getAmplifyTableName } = require('/opt/shared/commonFunction');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

/**
 * Get a board by title from the DynamoDB table.
 * @param {string} title - The title of the board to retrieve.
 * @returns {Promise<Object>} - The board that matches the title.
 */
const getBoardByTitle = async (title, process) => {
  try {
    // DynamoDB query parameters
    const boardTable = getAmplifyTableName('Board', process);
    const params = {
      TableName: boardTable, // Replace with your actual table name
      IndexName: 'byTitle', // GSI name created by Amplify for "title"
      KeyConditionExpression: 'title = :title',
      ExpressionAttributeValues: {
        ':title': title,
      },
    };

    // Execute the query
    const result = await dynamoDb.query(params).promise();

    if (result.Items && result.Items.length > 0) {
      // Return the first matching board
      return result.Items[0];
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    throw(error);
  }
};

module.exports = { getBoardByTitle };