/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');

// GraphQL query to get the latest BoardItem based on seq descending
const getLastBoardItemQuery = gql`
  query ListBoardItemsByBoard($boardId: ID!, $limit: Int) {
    listBoardItemsByBoard(
      boardId: $boardId
      sortDirection: DESC
      limit: $limit
    ) {
      items {
        seq
      }
    }
  }
`;

// GraphQL mutation to create a new BoardItem
const createBoardItemMutation = gql`
  mutation CreateBoardItem($input: CreateBoardItemInput!) {
    createBoardItem(input: $input) {
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

exports.createBoardItem = async (boardId, boardItemInput) => {
  try {
    // Step 1: Query the latest seq for the given boardID
    const lastBoardItemResponse = await client.query({
      query: getLastBoardItemQuery,
      variables: { boardId: boardId, limit: 1 }, // Limit to 1 to fetch the latest item
      fetchPolicy: 'network-only',
    });

    let latestSeq = 0; // Default seq value if no items exist
    if (
      lastBoardItemResponse.data &&
      lastBoardItemResponse.data.listBoardItemsByBoard.items.length > 0
    ) {
      latestSeq = lastBoardItemResponse.data.listBoardItemsByBoard.items[0].seq || 0;
    }

    console.log('Latest Seq:', latestSeq);

    // Step 2: Increment the seq value
    const newSeq = latestSeq + 1;

    // Step 3: Prepare the BoardItem payload
    const createBoardItemPayload = {
      author: boardItemInput.author || '',
      boardId: boardId,
      boardItemCategoryId: boardItemInput.boardItemCategoryId,
      content: boardItemInput.content || '',
      isNotice: boardItemInput.isNotice || false,
      seq: newSeq, // Incremented seq
      tag: boardItemInput.tag || '',
      title: boardItemInput.title || '',
      views: boardItemInput.views || 0,
    };

    // Step 4: Create the new BoardItem
    console.log('Board Item Payload:', createBoardItemPayload);
    const createBoardItemResponse = await client.mutate({
      mutation: createBoardItemMutation,
      variables: { input: createBoardItemPayload },
    });

    console.log('Board Item Created:', createBoardItemResponse.data.createBoardItem);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(createBoardItemResponse.data.createBoardItem),
    };
  } catch (error) {
    console.error('Error creating BoardItem:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Failed to create BoardItem', error: error.message }),
    };
  }
};