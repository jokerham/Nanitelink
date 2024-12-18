import { listBoardItems, listBoards } from './../../graphql/queries';
import { BoardItem, CreateBoardInput, CreateBoardItemInput, DeleteBoardInput, MenuType } from 'API';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import { 
  createMenu,
  createDocument,
  updateMenu,
  updateDocument, 
  createBoard,
  deleteBoard} from 'graphql/mutations';
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
    query: listBoards,
    variables: {
      filter: {
        title: {
          eq: title
        }
      }
    }
  });

  if (result.data.listBoards.items.length > 0) {
    return result.data.listBoards.items[0];
  } else {
    return undefined;
  }
};

interface ListBoardItemsResponse {
  data: {
    listBoardItems: {
      items: BoardItem[];
      nextToken: string | null;
    };
  };
}

// export const GraphqlQueryGetBoardItem = async (
//   id: string, 
//   page: number, 
//   numberOfRowsPerPage: number
// ): Promise<BoardItem[]> => {
//   const client = generateClient();

//   // Pagination parameters
//   const limit = numberOfRowsPerPage;
//   const offset = (page - 1) * numberOfRowsPerPage;

//   const items: BoardItem[] = [];
//   let nextToken: string | null = null;
//   let currentIndex = 0;

//   // Fetch loop to minimize API costs
//   do {
//     const result: ListBoardItemsResponse = await client.graphql({
//       query: listBoardItems,
//       variables: {
//         filter: {
//           boardItemBoardId: {
//             eq: id
//           }
//         },
//         limit,
//         nextToken
//       }
//     }) as ListBoardItemsResponse;

//     const data = result.data.listBoardItems;
//     nextToken = data.nextToken;

//     // Process fetched items to include only those within the offset range
//     const fetchedItems = data.items || [];
//     for (const item of fetchedItems) {
//       if (currentIndex >= offset && items.length < limit) {
//         items.push(item);
//       }
//       currentIndex++;
//       if (items.length >= limit) break;
//     }
//   } while (nextToken && items.length < limit);

//   return items;
// };

// export const GraphqlQueryCreateBoardItem = async (input: CreateBoardItemInput) => {
//   const createBoardItemMutation = `
//     mutation CreateBoardItem($input: CreateBoardItemInput!) {
//       createBoardItem(input: $input) {
//         id
//       }
//     }
//   `;

//   const client = generateClient();
  
//   // Explicitly cast the result to GraphQLResult
//   const result = (await client.graphql({
//     query: createBoardItemMutation,
//     variables: { input },
//     authMode: 'userPool'
//   })) as GraphQLResult<{ createBoardItem: { id: string; __typename: string } }>;

//   return result.data.createBoardItem.id;
// };
