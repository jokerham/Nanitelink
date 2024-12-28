import { listBoards, listBoardsByTitle } from './../../graphql/queries';
import { CreateBoardInput, DeleteBoardInput, MenuType } from 'API';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import { 
  createMenu,
  createDocument,
  updateMenu,
  updateDocument, 
  createBoard,
  deleteBoard,
  updateBoardItem} from 'graphql/mutations';
import { 
  listMenus,
  getDocument, 
  getModule,
  listModules,
  listDocuments } from 'graphql/queries';
import 'amplifyconfigure';

export interface IGraphqlError {
  errors: {
    message: string
  }[]
}

export interface IGraphqlQueryCreateMenuProps {
  menuName: string
  menuUrl: string
  module: string
  moduleId: string
  parent?: string
}

export const GraphqlQueryCreateMenu = async (props: IGraphqlQueryCreateMenuProps) => {
  const { menuName, menuUrl, module, moduleId, parent } = props;
  const client = generateClient();
  await client.graphql({
    query: createMenu,
    variables: {
      input: {
        name: menuName,
        menuType: MenuType.Internal,
        url: menuUrl,
        moduleId: module,
        parent: parent ?? '',
        menuModuleId: moduleId
      }
    },
    authMode: 'userPool'
  });
};

export interface IGraphqlQueryUpdateMenuProps {
  id: string
  menuName?: string
  menuUrl?: string
  module?: string
  parent?: string
}

export const GraphqlQueryUpdateMenu = async (props: IGraphqlQueryUpdateMenuProps) => {
  const { id, menuName, menuUrl, module, parent } = props;

  // Create the input object and only include defined values
  const input: { id: string; name?: string; url?: string; moduleMenusId?: string; parent?: string } = { id };

  if (menuName !== undefined) {
    input.name = menuName;
  }
  if (menuUrl !== undefined) {
    input.url = menuUrl;
  }
  if (module !== undefined) {
    input.moduleMenusId = module;
  }
  if (parent !== undefined) {
    input.parent = parent;
  }

  const client = generateClient();
  await client.graphql({
    query: updateMenu,
    variables: {
      input
    },
    authMode: 'userPool'
  });
};

export interface IGraphqlQueryListMenuProps {
  id: string
}

export const GraphqlQueryListMenu = async(props: IGraphqlQueryListMenuProps) => {
  const { id } = props;
  const client = generateClient();
  const result = await client.graphql({
    query: listMenus,
    variables: {
      filter: {
        parent: {
          eq: id
        }
      }
    }
  });
  let items = result.data?.listMenus.items;
  items = items.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  return items;
};

export const GraphqlQueryListAllMenu = async() => {
  const client = generateClient();
  const result = await client.graphql({
    query: listMenus
  });
  let items = result.data?.listMenus.items;
  items = items.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  return items;
};

export interface IGraphqlQueryCreateDocument {
  id: string;
  author: string;
  title: string;
  content: string;
}

export const GraphqlQueryCreateDocument = async (props: IGraphqlQueryCreateDocument) => {
  const { id, author, title, content } = props;
  const client = generateClient();

  if (!id) {
    const result = await client.graphql({
      query: createDocument,
      variables: {
        input: {
          author: author,
          title: title,
          content: content
        }
      },
      authMode: 'userPool'
    });
    return result.data.createDocument.id;
  } else {
    const result = await client.graphql({
      query: createDocument,
      variables: {
        input: {
          id: id,
          author: author,
          title: title,
          content: content
        }
      },
      authMode: 'userPool'
    });
    return result.data.createDocument.id;
  }

};

export interface IGraphqlQueryGetDocument {
  id: string;
}

export const GraphqlQueryGetDocument = async (props: IGraphqlQueryGetDocument) => {
  const { id } = props;
  const client = generateClient();
  const result = await client.graphql({
    query: getDocument,
    variables: {
      id: id
    }
  });
  return result.data.getDocument;
};

export interface IGraphqlQueryGetModuleProps {
  id: string;
}

export const GraphqlQueryGetModule = async (props: IGraphqlQueryGetModuleProps) => {
  const { id } = props;
  const client = generateClient();
  const result = await client.graphql({
    query: getModule,
    variables: {
      id: id
    }
  });
  return result.data.getModule;
};

export interface IGraphqlQueryUpdateDocumentProps {
  id: string;
  content: string;
}

export const GraphqlQueryListAllModules = async () => {
  const client = generateClient();
  const result = await client.graphql({
    query: listModules
  });
  return result.data.listModules.items;
};

export const GraphqlQueryListDocuments = async () => {
  const client = generateClient();
  const result = await client.graphql({
    query: listDocuments
  });
  return result.data.listDocuments.items;
};

export const GraphqlQueryListAllPages = async () => {
  const client = generateClient();
  const result = await client.graphql({
    query: listDocuments
  });
  return result.data.listDocuments.items;
};

export const GraphqlQueryUpdateDocument = async (props: IGraphqlQueryUpdateDocumentProps) => {
  const { id, content } = props;
  const client = generateClient();
  await client.graphql({
    query: updateDocument,
    variables: {
      input: {
        id: id,
        content: content
      }
    },
    authMode: 'userPool'
  });
};

export const GraphqlQueryListAllBoards = async () => {
  const client = generateClient();
  const result = await client.graphql({
    query: listBoards
  });
  return result.data.listBoards.items;
};

export const GraphqlQueryCreateBoard = async (input: CreateBoardInput) => {
  const client = generateClient();
  const result = await client.graphql({
    query: createBoard,
    variables: { input },
    authMode: 'userPool'
  });
  return result.data.createBoard.id;
};

export const GraphqlQueryDeleteBoard = async (input: DeleteBoardInput) => {
  const client = generateClient();
  const result = await client.graphql({
    query: deleteBoard,
    variables: { input },
    authMode: 'userPool'
  });
  return result.data.deleteBoard;
};

export const GraphqlQueryGetBoardByTitle = async (title: string) => {
  const client = generateClient();
  const result = await client.graphql({
    query: listBoardsByTitle,
    variables: {
      title: title
    }
  });

  if (result.data.listBoardsByTitle.items.length > 0) {
    return result.data.listBoardsByTitle.items[0];
  } else {
    return undefined;
  }
};

export interface IBoard {
  id: string;
  footer: string;
  header: string;
  title: string;
  boardItems: {
    items: IBoardItem[];
  };
}

export interface IBoardItem {
  id: string;
  seq: number;
  title: string;
  content: string;
  author: string;
  tag: string;
  views: number;
  isNotice: boolean;
  updatedAt: string;
  board: IBoard;
}

export const GraphqlQueryGetBoardItemBySeq = async (
  boardTitle: string,
  boardItemSeq: number
): Promise<IBoardItem | undefined> => {
  const client = generateClient();

  try {
    // Step 1: Query Board by Title
    const boardResult = (await client.graphql({
      query: `
        query GetBoardByTitle($title: String!) {
          listBoardsByTitle(title: $title) {
            items {
              id
              footer
              header
              title
            }
          }
        }
      `,
      variables: {
        title: boardTitle,
      },
      authMode: 'apiKey',
    })) as GraphQLResult<{ listBoardsByTitle: { items: IBoard[] } }>;

    // Check if the board exists
    const boards = boardResult.data?.listBoardsByTitle?.items || [];
    if (boards.length === 0) {
      console.error('Board not found for the given title.');
      return undefined;
    }

    const board = boards[0]; // Get the first matching board

    // Step 2: Query BoardItem by seq
    const boardItemResult = (await client.graphql({
      query: `
        query GetBoardItem($boardId: ID!, $seq: Int!) {
          listBoardItemsByBoard(boardId: $boardId, seq: {eq: $seq}) {
            items {
              id
              seq
              title
              content
              author
              tag
              views
              isNotice
              updatedAt
            }
          }
        }
      `,
      variables: {
        boardId: board.id,
        seq: boardItemSeq,
      },
      authMode: 'apiKey',
    })) as GraphQLResult<{ listBoardItemsByBoard: { items: IBoardItem[] } }>;

    const boardItems = boardItemResult.data?.listBoardItemsByBoard?.items || [];
    if (boardItems.length === 0) {
      console.error('Board item not found for the given seq.');
      return undefined;
    }

    // Attach the board to the board item
    const boardItem = boardItems[0];
    boardItem.board = board;

    return boardItem;
  } catch (error) {
    console.error('Error fetching BoardItem by sequence:', error);
    //throw new Error('Failed to fetch BoardItem by sequence. Please try again.');
  }
};

// Function to delete boarditem based on boarditem id
export const GraphqlQueryDeleteBoardItem = async (boardItemId: string) => {
  try {
    const client = generateClient();
    await client.graphql({
      query: `
        mutation DeleteBoardItem($input: DeleteBoardItemInput!) {
          deleteBoardItem(input: $input) {
            id
          }
        }
      `,
      variables: {
        input: {
          id: boardItemId,
        },
      },
      authMode: 'userPool',
    });
  } catch (error) {
    //console.error('Error fetching BoardItem by sequence:', error);
    //throw new Error('Failed to fetch BoardItem by sequence. Please try again.');
  }
};

// Function to fetch boarditem by its id
export const GraphqlQueryGetBoardItem = async (boardItemId: string) => {
  try {
    const client = generateClient();
    const result = await client.graphql({
      query: `
        query GetBoardItem($id: ID!) {
          getBoardItem(id: $id) {
            id
            seq
            title
            content
            author
            tag
            views
            isNotice
            updatedAt
            board {
              id
              title
              header
              footer
            }
          }
        }
      `,
      variables: {
        id: boardItemId,
      },
      authMode: 'apiKey',
    });

    if ('data' in result) {
      return result.data.getBoardItem;
    } else {
      throw new Error('Failed to fetch BoardItem by id. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching BoardItem by id:', error);
    //throw new Error('Failed to fetch BoardItem by id. Please try again.');
  }
};