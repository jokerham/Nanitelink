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
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const cognito = new AWS.CognitoIdentityServiceProvider();
  const params = {
    UserPoolId: 'ap-northeast-2_2u1MNZLaS',
    Limit: 10, // adjust as needed
    AttributesToGet: [
      'name',
      'email',
      'nickname',
      'picture',
    ],
  };

  try {
    const data = await cognito.listUsers(params).promise();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify(data.Users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify(error),
    };
  }

  // return {
  //   statusCode: 200,
  //   //  Uncomment below to enable CORS requests
  //   //  headers: {
  //   //      "Access-Control-Allow-Origin": "*",
  //   //      "Access-Control-Allow-Headers": "*"
  //   //  },
  //   body: JSON.stringify('Hello from Lambda!'),
  // };
};
