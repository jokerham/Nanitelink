/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* Amplify Params - DO NOT EDIT
    AUTH_NANITELINKE874E11C_USERPOOLID
    ENV
    REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');
const MAX_LIMIT = 60;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log({'queryStringParameters': event.queryStringParameters});
  const { UserPoolId } = event.queryStringParameters;
  const AttributesToGet = event.queryStringParameters.AttributesToGet || [
    'nickname',
    'email',
    'name',
    'picture',
  ]; // Default attributes if not provided
  const Filter = event.queryStringParameters.Filter || ''; // Default to empty string if not provided
  const page = event.queryStringParameters.page || 1; // Default to 1 if not provided
  const rows = event.queryStringParameters.rows || 10; // Default to 10 if not provided
  const cognito = new AWS.CognitoIdentityServiceProvider();

  let totalUsers = 0;
  let accumulatedUsers = [];
  let PaginationToken = undefined;

  try {
    // Step 1: Fetch the total number of users without attributes
    do {
      const countParams = {
        UserPoolId,
        AttributesToGet: [], // No attributes needed, just count
        Limit: MAX_LIMIT,
        Filter,
        PaginationToken,
      };

      console.log({'countParams': countParams});
      const countData = await cognito.listUsers(countParams).promise();
      totalUsers += countData.Users.length;

      // Set the PaginationToken for the next batch if it exists
      PaginationToken = countData.PaginationToken;
    } while (PaginationToken);

    let rowsToSkip = (page - 1) * rows;
    if (rowsToSkip < totalUsers) {
      // Step 2: Fetch users up to the desired page without attributes
      PaginationToken = undefined;
      while (rowsToSkip > 0) {
        const fetchParams = {
          UserPoolId,
          AttributesToGet: [], // No attributes needed, just count
          Limit: Math.min(MAX_LIMIT, usersToSkip),
          Filter,
          PaginationToken,
        };
        console.log({'fetchParams': fetchParams});
  
        const fetchData = await cognito.listUsers(fetchParams).promise();
        PaginationToken = fetchData.PaginationToken;
        usersToSkip -= fetchData.Users.length;
  
        if (!PaginationToken) {
          break; // If no more pages, stop
        }
        rowsToSkip -= SkipLimit;
      }
  
      // Step 3: Fetch users for the desired page with the necessary attributes
      const finalParams = {
        UserPoolId,
        AttributesToGet,
        Limit: rows,
        Filter,
        PaginationToken,
      };
      console.log({'finalParams': finalParams});
  
      const finalData = await cognito.listUsers(finalParams).promise();
      accumulatedUsers = finalData.Users;
    }

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalUsers / rows);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify({
        users: accumulatedUsers,
        totalPages: totalPages,
      }),
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