/* Amplify Params - DO NOT EDIT
	API_NANITELINK_GRAPHQLAPIENDPOINTOUTPUT
	API_NANITELINK_GRAPHQLAPIIDOUTPUT
	API_NANITELINK_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
	STORAGE_PROFILEIMAGES_BUCKETNAME
  Amplify Params - DO NOT EDIT */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { getCurrentUser } = require('./helpers/cognito');
const { getBoardItem, getAttachments, deleteBoardItem, deleteAttachments } = require('./utils/dynamodb');
const { deleteS3Objects } = require('./utils/s3');
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
};

exports.handler = async (event) => {
  try {
    // 1. Get boardItemId from the path parameter
    const boardItemId = event.pathParameters.id;

    // 2. Get the current Cognito user
    const user = getCurrentUser(event);

    // 3. Get the board item from DynamoDB
    const boardItem = await getBoardItem(boardItemId);

    if (!boardItem) {
      return { statusCode: 404, header, body: JSON.stringify({ error: 'Board item not found' }) };
    }

    // 4. Check if the user is the author or in the admin group
    if (boardItem.author !== user.username && !user.groups.includes('admin')) {
      return { statusCode: 403, header, body: JSON.stringify({ error: 'Access denied' }) };
    }

    // 5. Get attachments linked to the boardItem
    const attachments = await getAttachments(boardItemId);

    // 6. Delete all S3 objects
    await deleteS3Objects(attachments);

    // 7. Delete attachments from DynamoDB using IDs
    const attachmentIds = attachments.map((attachment) => attachment.id);
    await deleteAttachments(attachmentIds);

    // 8. Delete the board item from DynamoDB
    await deleteBoardItem(boardItemId);

    // 9. Return success
    return { statusCode: 200, headers, body: JSON.stringify({ message: 'Board item deleted successfully' }) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};