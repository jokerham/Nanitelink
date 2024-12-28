/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');

// GraphQL mutation to update an existing BoardItem
const updateBoardItemMutation = gql`
  mutation UpdateBoardItem($input: UpdateBoardItemInput!) {
    updateBoardItem(input: $input) {
      id
      boardId
      boardItemCategoryId
      author
      title
      content
      isNotice
      seq
      tag
      views
    }
  }
`;

// Configure AppSync client
const client = new AWSAppSyncClient({
  url: process.env.API_NANITELINK_GRAPHQLAPIENDPOINTOUTPUT,
  region: process.env.REGION,
  auth: {
    type: 'AMAZON_COGNITO_USER_POOLS',
    jwtToken: async () => {
      if (!global.currentToken) {
        throw new Error('Authorization token is missing');
      }
      return global.currentToken;
    },
  },
  disableOffline: true,
});

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
};

exports.updateBoardItem = async (boardId, boardItemInput) => {
  try {
    console.log('Updating BoardItem:', boardItemInput.id);

    const updateBoardItemPayload = {
      id: boardItemInput.id, // Existing ID
      author: boardItemInput.author || '',
      boardId: boardId,
      boardItemCategoryId: boardItemInput.boardItemCategoryId,
      content: boardItemInput.content || '',
      isNotice: boardItemInput.isNotice || false,
      seq: boardItemInput.seq, // Keep the existing seq
      tag: boardItemInput.tag || '',
      title: boardItemInput.title || '',
      views: boardItemInput.views || 0,
    };

    const updateBoardItemResponse = await client.mutate({
      mutation: updateBoardItemMutation,
      variables: { input: updateBoardItemPayload },
    });

    console.log('Board Item Updated:', updateBoardItemResponse.data.updateBoardItem);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(updateBoardItemResponse.data.updateBoardItem),
    };
  } catch (error) {
    console.error('Error updating BoardItem:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Failed to update BoardItem', error: error.message }),
    };
  }
};