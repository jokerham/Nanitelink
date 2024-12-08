/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getParameter = /* GraphQL */ `query GetParameter($id: ID!) {
  getParameter(id: $id) {
    id
    inputType
    label
    defaultValue
    optionValues {
      value
      label
      __typename
    }
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    moduleParametersId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetParameterQueryVariables,
  APITypes.GetParameterQuery
>;
export const listParameters = /* GraphQL */ `query ListParameters(
  $filter: ModelParameterFilterInput
  $limit: Int
  $nextToken: String
) {
  listParameters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      inputType
      label
      defaultValue
      optionValues {
        value
        label
        __typename
      }
      module {
        id
        name
        parameters {
          items {
            id
            inputType
            label
            defaultValue
            createdAt
            updatedAt
            moduleParametersId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      moduleParametersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParametersQueryVariables,
  APITypes.ListParametersQuery
>;
export const getModule = /* GraphQL */ `query GetModule($id: ID!) {
  getModule(id: $id) {
    id
    name
    parameters {
      items {
        id
        inputType
        label
        defaultValue
        optionValues {
          value
          label
          __typename
        }
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleParametersId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetModuleQueryVariables, APITypes.GetModuleQuery>;
export const listModules = /* GraphQL */ `query ListModules(
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModulesQueryVariables,
  APITypes.ListModulesQuery
>;
export const getMenu = /* GraphQL */ `query GetMenu($id: ID!) {
  getMenu(id: $id) {
    id
    name
    parent
    menuType
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    moduleId
    parameterSettings {
      id
      value
      __typename
    }
    url
    sortOrder
    createdAt
    updatedAt
    menuModuleId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMenuQueryVariables, APITypes.GetMenuQuery>;
export const listMenus = /* GraphQL */ `query ListMenus(
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      parent
      menuType
      module {
        id
        name
        parameters {
          items {
            id
            inputType
            label
            defaultValue
            createdAt
            updatedAt
            moduleParametersId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      moduleId
      parameterSettings {
        id
        value
        __typename
      }
      url
      sortOrder
      createdAt
      updatedAt
      menuModuleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMenusQueryVariables, APITypes.ListMenusQuery>;
export const getDocument = /* GraphQL */ `query GetDocument($id: ID!) {
  getDocument(id: $id) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDocumentQueryVariables,
  APITypes.GetDocumentQuery
>;
export const listDocuments = /* GraphQL */ `query ListDocuments(
  $filter: ModelDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      author
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDocumentsQueryVariables,
  APITypes.ListDocumentsQuery
>;
export const getBoardCatgory = /* GraphQL */ `query GetBoardCatgory($id: ID!) {
  getBoardCatgory(id: $id) {
    id
    name
    parent {
      id
      name
      parent {
        id
        name
        parent {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        children {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        sortOrder
        createdAt
        updatedAt
        boardCatgoryChildrenId
        boardCategoryId
        __typename
      }
      children {
        items {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        nextToken
        __typename
      }
      sortOrder
      createdAt
      updatedAt
      boardCatgoryChildrenId
      boardCategoryId
      __typename
    }
    children {
      items {
        id
        name
        parent {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        children {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        sortOrder
        createdAt
        updatedAt
        boardCatgoryChildrenId
        boardCategoryId
        __typename
      }
      nextToken
      __typename
    }
    sortOrder
    createdAt
    updatedAt
    boardCatgoryChildrenId
    boardCategoryId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBoardCatgoryQueryVariables,
  APITypes.GetBoardCatgoryQuery
>;
export const listBoardCatgories = /* GraphQL */ `query ListBoardCatgories(
  $filter: ModelBoardCatgoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoardCatgories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      parent {
        id
        name
        parent {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        children {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        sortOrder
        createdAt
        updatedAt
        boardCatgoryChildrenId
        boardCategoryId
        __typename
      }
      children {
        items {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        nextToken
        __typename
      }
      sortOrder
      createdAt
      updatedAt
      boardCatgoryChildrenId
      boardCategoryId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBoardCatgoriesQueryVariables,
  APITypes.ListBoardCatgoriesQuery
>;
export const getBoard = /* GraphQL */ `query GetBoard($id: ID!) {
  getBoard(id: $id) {
    id
    title
    header
    footer
    listViewItems
    listSort {
      item
      sort
      __typename
    }
    excludeNoticeFlag
    type
    category {
      items {
        id
        name
        parent {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        children {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        sortOrder
        createdAt
        updatedAt
        boardCatgoryChildrenId
        boardCategoryId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBoardQueryVariables, APITypes.GetBoardQuery>;
export const listBoards = /* GraphQL */ `query ListBoards(
  $filter: ModelBoardFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      header
      footer
      listViewItems
      listSort {
        item
        sort
        __typename
      }
      excludeNoticeFlag
      type
      category {
        items {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBoardsQueryVariables,
  APITypes.ListBoardsQuery
>;
export const getAttachment = /* GraphQL */ `query GetAttachment($id: ID!) {
  getAttachment(id: $id) {
    id
    filename
    filetype
    path
    createdAt
    updatedAt
    boardItemAttachmentsId
    author
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAttachmentQueryVariables,
  APITypes.GetAttachmentQuery
>;
export const listAttachments = /* GraphQL */ `query ListAttachments(
  $filter: ModelAttachmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      filename
      filetype
      path
      createdAt
      updatedAt
      boardItemAttachmentsId
      author
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAttachmentsQueryVariables,
  APITypes.ListAttachmentsQuery
>;
export const getBoardItem = /* GraphQL */ `query GetBoardItem($id: ID!) {
  getBoardItem(id: $id) {
    id
    board {
      id
      title
      header
      footer
      listViewItems
      listSort {
        item
        sort
        __typename
      }
      excludeNoticeFlag
      type
      category {
        items {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      parent {
        id
        name
        parent {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        children {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        sortOrder
        createdAt
        updatedAt
        boardCatgoryChildrenId
        boardCategoryId
        __typename
      }
      children {
        items {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        nextToken
        __typename
      }
      sortOrder
      createdAt
      updatedAt
      boardCatgoryChildrenId
      boardCategoryId
      __typename
    }
    title
    content
    tag
    author
    attachments {
      items {
        id
        filename
        filetype
        path
        createdAt
        updatedAt
        boardItemAttachmentsId
        author
        __typename
      }
      nextToken
      __typename
    }
    isNotice
    views
    createdAt
    updatedAt
    boardItemBoardId
    boardItemCategoryId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBoardItemQueryVariables,
  APITypes.GetBoardItemQuery
>;
export const listBoardItems = /* GraphQL */ `query ListBoardItems(
  $filter: ModelBoardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoardItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      board {
        id
        title
        header
        footer
        listViewItems
        listSort {
          item
          sort
          __typename
        }
        excludeNoticeFlag
        type
        category {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      category {
        id
        name
        parent {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        children {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        sortOrder
        createdAt
        updatedAt
        boardCatgoryChildrenId
        boardCategoryId
        __typename
      }
      title
      content
      tag
      author
      attachments {
        items {
          id
          filename
          filetype
          path
          createdAt
          updatedAt
          boardItemAttachmentsId
          author
          __typename
        }
        nextToken
        __typename
      }
      isNotice
      views
      createdAt
      updatedAt
      boardItemBoardId
      boardItemCategoryId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBoardItemsQueryVariables,
  APITypes.ListBoardItemsQuery
>;
export const getBoardItemComment = /* GraphQL */ `query GetBoardItemComment($id: ID!) {
  getBoardItemComment(id: $id) {
    id
    boardItem {
      id
      board {
        id
        title
        header
        footer
        listViewItems
        listSort {
          item
          sort
          __typename
        }
        excludeNoticeFlag
        type
        category {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      category {
        id
        name
        parent {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        children {
          items {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          nextToken
          __typename
        }
        sortOrder
        createdAt
        updatedAt
        boardCatgoryChildrenId
        boardCategoryId
        __typename
      }
      title
      content
      tag
      author
      attachments {
        items {
          id
          filename
          filetype
          path
          createdAt
          updatedAt
          boardItemAttachmentsId
          author
          __typename
        }
        nextToken
        __typename
      }
      isNotice
      views
      createdAt
      updatedAt
      boardItemBoardId
      boardItemCategoryId
      __typename
    }
    comment
    author
    createdAt
    updatedAt
    boardItemCommentBoardItemId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBoardItemCommentQueryVariables,
  APITypes.GetBoardItemCommentQuery
>;
export const listBoardItemComments = /* GraphQL */ `query ListBoardItemComments(
  $filter: ModelBoardItemCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listBoardItemComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      boardItem {
        id
        board {
          id
          title
          header
          footer
          listViewItems
          listSort {
            item
            sort
            __typename
          }
          excludeNoticeFlag
          type
          category {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        category {
          id
          name
          parent {
            id
            name
            sortOrder
            createdAt
            updatedAt
            boardCatgoryChildrenId
            boardCategoryId
            __typename
          }
          children {
            nextToken
            __typename
          }
          sortOrder
          createdAt
          updatedAt
          boardCatgoryChildrenId
          boardCategoryId
          __typename
        }
        title
        content
        tag
        author
        attachments {
          items {
            id
            filename
            filetype
            path
            createdAt
            updatedAt
            boardItemAttachmentsId
            author
            __typename
          }
          nextToken
          __typename
        }
        isNotice
        views
        createdAt
        updatedAt
        boardItemBoardId
        boardItemCategoryId
        __typename
      }
      comment
      author
      createdAt
      updatedAt
      boardItemCommentBoardItemId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBoardItemCommentsQueryVariables,
  APITypes.ListBoardItemCommentsQuery
>;
