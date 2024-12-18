/* Amplify Params - DO NOT EDIT
	API_NANITELINK_GRAPHQLAPIENDPOINTOUTPUT
	API_NANITELINK_GRAPHQLAPIIDOUTPUT
	API_NANITELINK_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable no-undef */
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');

// GraphQL query to get the total count of BoardItems
const getBoardItemCountQuery = gql`
  query ListBoardItemsByBoard($boardId: ID!) {
    listBoardItemsByBoard(boardId: $boardId) {
      items {
        id
      }
    }
  }
`;

// GraphQL query to get paginated BoardItems
const listBoardItemsQuery = gql`
  query ListBoardItemsByBoard(
    $boardId: ID!
    $limit: Int!
    $nextToken: String
  ) {
    listBoardItemsByBoard(
      boardId: $boardId
      sortDirection: DESC
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        seq
        content
        author
        createdAt
        views
      }
      nextToken
    }
  }
`;

// AppSync Client Configuration
const client = new AWSAppSyncClient({
  url: process.env.API_NANITELINK_GRAPHQLAPIENDPOINTOUTPUT,
  region: process.env.REGION,
  auth: {
    type: 'API_KEY', // Public access using API key
    apiKey: process.env.API_NANITELINK_GRAPHQLAPIKEYOUTPUT, // AppSync API Key
  },
  disableOffline: true,
});

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,DELETE',
};

exports.handler = async (event) => {
  console.log('Event:', event);

  const { boardId, page, rowsPerPage } = JSON.parse(event.body);

  try {
    const pageNumber = parseInt(page) || 1;
    const limit = parseInt(rowsPerPage) || 10;
    let nextToken = null;

    // Step 1: Get the total count of items
    const totalItemsResponse = await client.query({
      query: getBoardItemCountQuery,
      variables: { boardId: boardId },
      fetchPolicy: 'network-only',
    });

    const totalItems = totalItemsResponse.data.listBoardItemsByBoard.items.length || 0;
    const totalPages = Math.ceil(totalItems / limit);

    // Step 2: Paginate to the desired page
    let items = [];
    for (let currentPage = 1; currentPage <= pageNumber; currentPage++) {
      const response = await client.query({
        query: listBoardItemsQuery,
        variables: { boardId: boardId, limit, nextToken },
        fetchPolicy: 'network-only',
      });

      nextToken = response.data.listBoardItemsByBoard.nextToken;

      if (currentPage === pageNumber) {
        items = response.data.listBoardItemsByBoard.items;
      }

      if (!nextToken) break; // Exit loop if no more pages
    }

    // Step 3: Return the paginated results
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        totalPages: totalPages,
        currentPage: pageNumber,
        rowsPerPage: limit,
        items: items,
      }),
    };
  } catch (error) {
    console.error('Error querying BoardItems:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Failed to fetch BoardItems', error: error.message }),
    };
  }
};