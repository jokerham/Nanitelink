import { MenuType } from 'API';
import { generateClient } from 'aws-amplify/api';
import { 
  createMenu,
  createDocument,
  updateMenu,
  updateDocument } from 'graphql/mutations';
import { 
  listMenus,
  getDocument, 
  getModule,
  listModules,
  listDocuments} from 'graphql/queries';
import 'amplifyconfigure';

export interface IGraphqlError {
  errors: {
    message: string
  }[]
}

interface IGraphqlQueryCreateMenuProps {
  menuName: string
  menuUrl: string
  module: string
  moduleId: string
  parent?: string
}

const GraphqlQueryCreateMenu = async (props: IGraphqlQueryCreateMenuProps) => {
  const { menuName, menuUrl, module, moduleId, parent } = props;
  const client = generateClient();
  await client.graphql({
    query: createMenu,
    variables: {
      input: {
        name: menuName,
        menuType: MenuType.Internal,
        url: menuUrl,
        moduleMenusId: module,
        moduleId: moduleId,
        parent: parent ?? ''
      }
    },
    authMode: 'userPool'
  });
};

interface IGraphqlQueryUpdateMenuProps {
  id: string
  menuName?: string
  menuUrl?: string
  module?: string
  parent?: string
}

const GraphqlQueryUpdateMenu = async (props: IGraphqlQueryUpdateMenuProps) => {
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

interface IGraphqlQueryListMenuProps {
  id: string
}

const GraphqlQueryListMenu = async(props: IGraphqlQueryListMenuProps) => {
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

const GraphqlQueryListAllMenu = async() => {
  const client = generateClient();
  const result = await client.graphql({
    query: listMenus
  });
  let items = result.data?.listMenus.items;
  items = items.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
  return items;
};

interface IGraphqlQueryCreateDocument {
  id: string;
  author: string;
  title: string;
  content: string;
}

const GraphqlQueryCreateDocument = async (props: IGraphqlQueryCreateDocument) => {
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

interface IGraphqlQueryGetDocument {
  id: string;
}

const GraphqlQueryGetDocument = async (props: IGraphqlQueryGetDocument) => {
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

interface IGraphqlQueryGetModuleProps {
  id: string;
}

const GraphqlQueryGetModule = async (props: IGraphqlQueryGetModuleProps) => {
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

interface IGraphqlQueryUpdateDocumentProps {
  id: string;
  content: string;
}

const GraphqlQueryListAllModules = async () => {
  const client = generateClient();
  const result = await client.graphql({
    query: listModules
  });
  return result.data.listModules.items;
};

const GraphqlQueryListDocuments = async () => {
  const client = generateClient();
  const result = await client.graphql({
    query: listDocuments
  });
  return result.data.listDocuments.items;
};

const GraphqlQueryUpdateDocument = async (props: IGraphqlQueryUpdateDocumentProps) => {
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

export { 
  // Create
  GraphqlQueryCreateMenu,
  GraphqlQueryCreateDocument,
  // Update
  GraphqlQueryUpdateMenu,
  GraphqlQueryUpdateDocument,
  // List
  GraphqlQueryListMenu,
  GraphqlQueryListAllMenu,
  GraphqlQueryListAllModules,
  GraphqlQueryListDocuments,
  // Get
  GraphqlQueryGetModule,
  GraphqlQueryGetDocument
};