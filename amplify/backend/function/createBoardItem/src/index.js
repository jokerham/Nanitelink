/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createBoardItem } = require('./create');
const { updateBoardItem } = require('./update');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
};

exports.handler = async (event) => {
  console.log('Event:', event);

  const authHeader = event.headers.Authorization || event.headers.authorization;
  if (!authHeader) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }

  global.currentToken = authHeader;

  const body = JSON.parse(event.body);
  const boardId = body.boardId;
  const boardItemInput = body.boardItemInput;

  try {
    console.log('Board ID:', boardId);

    if (boardItemInput.id) {
      console.log('Routing to updateBoardItem');
      return await updateBoardItem(boardId, boardItemInput);
    } else {
      console.log('Routing to createBoardItem');
      return await createBoardItem(boardId, boardItemInput);
    }
  } catch (error) {
    console.error('Error in handler:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
    };
  }
};