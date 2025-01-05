/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* Amplify Params - DO NOT EDIT
	API_NANITELINK_GRAPHQLAPIENDPOINTOUTPUT
	API_NANITELINK_GRAPHQLAPIIDOUTPUT
	API_NANITELINK_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { getBoardByTitle } = require('./getBoard');
const { getBoardItem } = require('./getBoardItem');
const { getUserAttributes } = require('./getUserAttributes');
const { getAttachments } = require('./getAttachments');
const { incrementView } = require('./incrementView');
const { replacePathWithS3Url } = require('./replacePathWithS3Url');
const { returnWithCors, validateKey } = require('/opt/shared/commonFunction');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  // Step 1: Valudate the API key
  await validateKey(event, process);

  try {
    // Step 2: Extract "boardTitle" and "boardItemSeq" from the URL path
    const pathParams = event.pathParameters || {};
    const { boardTitle, boarditemSeq, increment = true, replacePath = true } = pathParams;

    // Step 3: Get the Board from DynamoDB
    const board = await getBoardByTitle(boardTitle, process);

    // Step 4: Get the BoardItem from DynamoDB
    if (board) {
      const boardItem = await getBoardItem(board.id, parseInt(boarditemSeq), process);
      
      if (boardItem) {
        // Step 5: Get the author's attributes
        const userPoolId = process.env.AUTH_YOURCOGNITO_USERPOOLID;
        const authorAttributes = await getUserAttributes(userPoolId, boardItem.author);

        // Step 6: Get the list of attachements
        const attachements = await getAttachments(boardItem.id, process);

        // Step 7: Increment the view count
        if (increment) {
          const incrementViewResult = await incrementView(event, process, boardItem.id);
          if (incrementViewResult) {
            boardItem.views += 1;
          }
        }

        // Step 7: Replace the path
        if (replacePath) {
          boardItem.content = await replacePathWithS3Url(boardItem.content);
        }

        // Step 8: Construct the response
        const boardItemResponse = {
          ...boardItem,
          board: board,
          author: authorAttributes,
          attachments: attachements,
        };
        
        return returnWithCors(200, JSON.stringify(boardItemResponse));
      } else {
        return returnWithCors(404, JSON.stringify({ error: 'BoardItem not found' }));
      }
    } else {
      return returnWithCors(404, JSON.stringify({ error: 'Board not found' }));
    }

  } catch (Error) {
    returnWithCors(500, JSON.stringify({ error: Error.message }));
  }
};
