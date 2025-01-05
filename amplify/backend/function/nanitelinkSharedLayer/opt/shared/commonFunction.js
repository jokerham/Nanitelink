/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');

const getAmplifyTableName = (tableName, process) => {
  const apiid = process.env.API_NANITELINK_GRAPHQLAPIIDOUTPUT;
  const env = process.env.ENV;
  return `${tableName}-${apiid}-${env}`;
};

const returnWithCors = (statusCode, body) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
    body,
  };
};

const validateKey = async (event, process) => {
  const apiKey = event.headers['x-api-key'];
  if (!apiKey) {
    returnWithCors(400, JSON.stringify({ message: 'API key is missing.' }));
  }

  try {
    const appsync = new AWS.AppSync();
    const apiId = process.env.APPSYNC_API_ID;
    const result = await appsync.listApiKeys({ apiId }).promise();
    const isValid = result.apiKeys.some(
      (key) => key.id === apiKey && new Date(key.expires) > new Date()
    );

    if (!isValid) {
      returnWithCors(401, JSON.stringify({ message: 'Invalid API Key.' }));
    }
  } catch (error) {
    returnWithCors(500, JSON.stringify({ message: 'Internal Server Error' }));
  }
};

module.exports = { getAmplifyTableName, returnWithCors, validateKey };