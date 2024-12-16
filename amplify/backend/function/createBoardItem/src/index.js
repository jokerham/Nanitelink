/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');

// GraphQL query to get the current finalIndex
const getBoardQuery = gql`
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
      id
      finalIndex
    }
  }
`;

// GraphQL mutation to update the finalIndex
const updateBoardFinalIndexMutation = gql`
  mutation UpdateBoardFinalIndex($id: ID!, $finalIndex: Int!) {
    updateBoard(input: { id: $id, finalIndex: $finalIndex }) {
      id
      finalIndex
    }
  }
`;

// GraphQL mutation to create a new BoardItem
const createBoardItemMutation = gql`
  mutation CreateBoardItem($input: CreateBoardItemInput!) {
    createBoardItem(input: $input) {
      id
      boardItemBoardId
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
  'Access-Control-Allow-Origin': '*', // Allow all origins
  'Access-Control-Allow-Headers': 'Content-Type', // Allow custom headers
  'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE', // Allowed methods
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log('Event:', event);

  // Extract the Authorization token from the headers
  const authHeader = event.headers.Authorization || event.headers.authorization;
  if (!authHeader) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized' }),
    };
  }

  // Save the token to a global variable for use in the AppSync client
  global.currentToken = authHeader;

  const body = JSON.parse(event.body);
  const boardId = body.boardId;
  const boardItemInput = body.boardItemInput;

  try {
    // Step 1: Get the current finalIndex
    console.log('Board ID:', boardId);
    const getBoardResponse = await client.query({
      query: getBoardQuery,
      variables: { id: boardId },
      fetchPolicy: 'network-only', // Ensure the latest data is fetched
    });

    const currentFinalIndex = getBoardResponse.data.getBoard.finalIndex;

    // Step 2: Increment the finalIndex
    const newFinalIndex = currentFinalIndex + 1;

    // Step 3: Save the updated finalIndex
    console.log('New Final Index:', newFinalIndex);
    const updateBoardResponse = await client.mutate({
      mutation: updateBoardFinalIndexMutation,
      variables: {
        id: boardId,
        finalIndex: newFinalIndex,
      },
    });

    // Step 4: Prepare the boardItemInput
    const updatedSeq = updateBoardResponse.data.updateBoard.finalIndex;
    const boardItemPayload = {
      author: boardItemInput.author || '',
      boardItemBoardId: boardId,
      boardItemCategoryId: boardItemInput.boardItemCategoryId,
      content: boardItemInput.content || '',
      isNotice: boardItemInput.isNotice || false,
      seq: updatedSeq,
      tag: boardItemInput.tag || '',
      title: boardItemInput.title || '',
      views: boardItemInput.views || 0,
    };

    // Step 5: Create the BoardItem
    console.log('Board Item Payload:', boardItemPayload);
    const createBoardItemResponse = await client.mutate({
      mutation: createBoardItemMutation,
      variables: { input: boardItemPayload },
    });

    console.log('Board Item Created:', createBoardItemResponse.data.createBoardItem);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(createBoardItemResponse.data.createBoardItem),
    };
  } catch (error) {
    console.error('Error in GraphQL operations:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'GraphQL operation failed', error: error.message }),
    };
  }
};