/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

// TTL duration in seconds (e.g., 5 minutes)
const TTL_DURATION = 300;

let tableName = 'cacheTable';
if (process.env.ENV && process.env.ENV !== 'NONE') {
  tableName = tableName + '-' + process.env.ENV;
}

exports.handler = async (event) => {
  try {
    console.log(event);
    const { operation, key, value } = JSON.parse(event.body);

    if (!operation || !key) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request. Operation and key are required.' }),
      };
    }

    switch (operation) {
    case 'getCache':
      return await getCache(key);
    case 'saveCache':
      if (!value) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Value is required for saveCache operation.' }),
        };
      }
      return await saveCache(key, value);
    default:
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid operation.' }),
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error', error: error.message }),
    };
  }
};

// Save Cache
const saveCache = async (key, value) => {
  const ttl = Math.floor(Date.now() / 1000) + TTL_DURATION;

  const params = {
    TableName: tableName,
    Item: {
      cacheKey: key,
      value: value,
      ttl: ttl, // Time-to-live for the cache
    },
  };

  await dynamodb.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Cache saved successfully', key, value }),
  };
};

// Get Cache
const getCache = async (key) => {
  const params = {
    TableName: tableName,
    Key: {
      cacheKey: key,
    },
  };

  const result = await dynamodb.get(params).promise();

  if (!result.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Cache not found' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Cache retrieved successfully', value: result.Item.value }),
  };
};