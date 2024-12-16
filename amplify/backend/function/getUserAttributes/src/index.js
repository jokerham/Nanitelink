/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const AWS = require('aws-sdk');

// Initialize Cognito Identity Provider
const cognito = new AWS.CognitoIdentityServiceProvider();
const headers = {
  'Access-Control-Allow-Origin': '*', // Allow all origins
  'Access-Control-Allow-Headers': 'Content-Type', // Allow custom headers
  'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE', // Allowed methods
};

exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event));

  // Extract the username from the query string parameters
  //const username = event.params?.querystring?.username;
  const username = event.pathParameters.id;
  const userPoolId = process.env.AUTH_YOURCOGNITO_USERPOOLID; // Replace with your User Pool ID environment variable

  console.log({username, userPoolId});

  if (!username) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing username parameter', event: event }),
    };
  }

  try {
    // Fetch user attributes using AdminGetUser API
    const response = await cognito
      .adminGetUser({
        UserPoolId: userPoolId,
        Username: username,
      })
      .promise();

    // Transform the attributes into a key-value format
    const attributes = response.UserAttributes?.reduce((acc, attr) => {
      if (attr.Name && attr.Value) {
        acc[attr.Name] = attr.Value;
      }
      return acc;
    }, {}) || {};

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(attributes),
    };
  } catch (error) {
    console.error('Error fetching user attributes:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to retrieve user attributes' }),
    };
  }
};
