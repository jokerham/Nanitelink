/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* Amplify Params - DO NOT EDIT
  API_NANITELINK_GRAPHQLAPIENDPOINTOUTPUT
  API_NANITELINK_GRAPHQLAPIIDOUTPUT
  API_NANITELINK_GRAPHQLAPIKEYOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// amplify/backend/function/yourFunctionName/src/index.js
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const dynamodb = new AWS.DynamoDB.DocumentClient();
const apiid = process.env.API_NANITELINK_GRAPHQLAPIIDOUTPUT;
const env = process.env.ENV;
const lambdaName = 'ttlCache-dev';
const tableName = `BoardItem-${apiid}-${env}`;

exports.handler = async (event) => {
  console.log(process.env);
  try {
    const boardItemId = event.pathParameters.id;
        
    if (!boardItemId) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        },
        body: JSON.stringify({ message: 'BoardItem ID is required' })
      };
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
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify({ message: 'Already viewed' }),
      };
    }

    // Step 2: Increment Views in DynamoDB
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

    const result = await dynamodb.update(params).promise();

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

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({
        success: true,
        updatedItem: result.Attributes,
      }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify({
        message: 'Error incrementing views',
        error: error.message
      })
    };
  }
};
