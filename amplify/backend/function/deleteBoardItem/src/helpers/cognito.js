/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const jwtDecode = require('jwt-decode');

function getCurrentUser(event) {
  if (!event.headers.Authorization) {
    throw new Error('Authorization header is missing');
  }

  const token = event.headers.Authorization.split(' ')[1]; // Remove 'Bearer ' prefix
  const decoded = jwtDecode(token);

  return {
    username: decoded['cognito:username'],
    groups: decoded['cognito:groups'] || [],
  };
}

module.exports = { getCurrentUser };