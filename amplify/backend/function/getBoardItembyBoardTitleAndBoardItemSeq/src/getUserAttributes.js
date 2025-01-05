/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');

// Initialize Cognito Identity Provider
const cognito = new AWS.CognitoIdentityServiceProvider();

/**
 * Fetch user attributes from Cognito.
 * @param {string} userPoolId - The Cognito User Pool ID.
 * @param {string} username - The username of the Cognito user.
 * @returns {Promise<Object>} - The user attributes in key-value format.
 * @throws {Error} - Throws an error if the user attributes cannot be retrieved.
 */
const getUserAttributes = async (userPoolId, username) => {
  if (!userPoolId || !username) {
    throw new Error('userPoolId and username are required parameters.');
  }

  try {
    // Call Cognito's adminGetUser API
    const response = await cognito
      .adminGetUser({
        UserPoolId: userPoolId,
        Username: username,
      })
      .promise();

    // Transform the attributes into a key-value format
    const attributes =
      response.UserAttributes?.reduce((acc, attr) => {
        if (attr.Name && attr.Value) {
          acc[attr.Name] = attr.Value;
        }
        return acc;
      }, {}) || {};
    attributes.username = username;
    return attributes;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to retrieve user attributes');
  }
};

module.exports = { getUserAttributes };