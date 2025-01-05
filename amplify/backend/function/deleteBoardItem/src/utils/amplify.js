/* eslint-disable no-undef */
function getTableName(resourceName) {
  const apiId = process.env.API_NANITELINK_GRAPHQLAPIIDOUTPUT;
  const env = process.env.ENV;
  return `${resourceName}-${apiId}-${env}`;
}

module.exports = { getTableName };