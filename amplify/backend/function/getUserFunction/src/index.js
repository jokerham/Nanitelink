/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* Amplify Params - DO NOT EDIT
    AUTH_NANITELINKE874E11C_USERPOOLID
    ENV
    REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log({'queryStringParameters': event.queryStringParameters});

  const AccessToken = event.queryStringParameters.AccessToken || ''; // Default to empty string if not provided

  try {
    // Fetch user from id
    const params = { AccessToken };
    console.log({'Params': params});

    const data = await cognito.getUser(params).promise();
    const user = data.Users;

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify({ user }),
    };
  } catch (error) {
    console.log(error.__type);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify(error),
    };
  }
};
