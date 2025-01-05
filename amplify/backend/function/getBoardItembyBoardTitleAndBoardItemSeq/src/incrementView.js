/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const dynamodb = new AWS.DynamoDB.DocumentClient();
const lambdaName = 'ttlCache-dev';

/**
 * Increment the view count of a board item.
 * @param {AWSLambda.APIGatewayProxyEvent} event 
 * @param {NodeJS.Process} process 
 * @param {string} boardItemId 
 * @returns {Promise<boolean>} - True if the view count was incremented, false otherwise.
 */
const incrementView = async (event, process, boardItemId) =>{
  console.log({event, process, boardItemId});
  try {
    if (!boardItemId) {
      throw new Error('BoardItemId is required');
    }

    const host = event.headers['host']; // Extract host from headers
    const cacheKey = `views:${boardItemId}:${host}`;
      
    // Step 1: Check Cache Using ttlCache-dev Lambda
    const getCacheResponse = await lambda
      .invoke({
        FunctionName: lambdaName,
        Payload: JSON.stringify({
          body: JSON.stringify({
            operation: 'getCache',
            key: cacheKey,
          }),
        }),
      })
      .promise();

    const getCacheResult = JSON.parse(getCacheResponse.Payload);
    if (getCacheResult.statusCode === 200) {
      return false;
    }

    // Step 2: Increment Views in DynamoDB
    const apiid = process.env.API_NANITELINK_GRAPHQLAPIIDOUTPUT;
    const env = process.env.ENV;
    const tableName = `BoardItem-${apiid}-${env}`;

    const params = {
      TableName: tableName,
      Key: { id: boardItemId },
      UpdateExpression: 'SET #views = if_not_exists(#views, :start) + :increment',
      ExpressionAttributeNames: {
        '#views': 'views',
      },
      ExpressionAttributeValues: {
        ':start': 0,
        ':increment': 1,
      },
      ReturnValues: 'ALL_NEW',
    };
    await dynamodb.update(params).promise();

    // Step 3: Save Cache Using ttlCache-dev Lambda
    await lambda
      .invoke({
        FunctionName: lambdaName,
        Payload: JSON.stringify({
          body: JSON.stringify({
            operation: 'saveCache',
            key: cacheKey,
            value: '1',
          }),
        }),
      })
      .promise();

    return true;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = { incrementView };
