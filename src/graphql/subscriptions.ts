/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateParameter = /* GraphQL */ `subscription OnCreateParameter($filter: ModelSubscriptionParameterFilterInput) {
  onCreateParameter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParameterSubscriptionVariables,
  APITypes.OnCreateParameterSubscription
>;
export const onUpdateParameter = /* GraphQL */ `subscription OnUpdateParameter($filter: ModelSubscriptionParameterFilterInput) {
  onUpdateParameter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParameterSubscriptionVariables,
  APITypes.OnUpdateParameterSubscription
>;
export const onDeleteParameter = /* GraphQL */ `subscription OnDeleteParameter($filter: ModelSubscriptionParameterFilterInput) {
  onDeleteParameter(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParameterSubscriptionVariables,
  APITypes.OnDeleteParameterSubscription
>;
export const onCreateModule = /* GraphQL */ `subscription OnCreateModule($filter: ModelSubscriptionModuleFilterInput) {
  onCreateModule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateModuleSubscriptionVariables,
  APITypes.OnCreateModuleSubscription
>;
export const onUpdateModule = /* GraphQL */ `subscription OnUpdateModule($filter: ModelSubscriptionModuleFilterInput) {
  onUpdateModule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateModuleSubscriptionVariables,
  APITypes.OnUpdateModuleSubscription
>;
export const onDeleteModule = /* GraphQL */ `subscription OnDeleteModule($filter: ModelSubscriptionModuleFilterInput) {
  onDeleteModule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteModuleSubscriptionVariables,
  APITypes.OnDeleteModuleSubscription
>;
export const onCreateMenu = /* GraphQL */ `subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
  onCreateMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMenuSubscriptionVariables,
  APITypes.OnCreateMenuSubscription
>;
export const onUpdateMenu = /* GraphQL */ `subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
  onUpdateMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMenuSubscriptionVariables,
  APITypes.OnUpdateMenuSubscription
>;
export const onDeleteMenu = /* GraphQL */ `subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
  onDeleteMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMenuSubscriptionVariables,
  APITypes.OnDeleteMenuSubscription
>;
export const onCreateDocument = /* GraphQL */ `subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onCreateDocument(filter: $filter) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDocumentSubscriptionVariables,
  APITypes.OnCreateDocumentSubscription
>;
export const onUpdateDocument = /* GraphQL */ `subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onUpdateDocument(filter: $filter) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDocumentSubscriptionVariables,
  APITypes.OnUpdateDocumentSubscription
>;
export const onDeleteDocument = /* GraphQL */ `subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onDeleteDocument(filter: $filter) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDocumentSubscriptionVariables,
  APITypes.OnDeleteDocumentSubscription
>;
export const onCreateBoardCatgory = /* GraphQL */ `subscription OnCreateBoardCatgory(
  $filter: ModelSubscriptionBoardCatgoryFilterInput
) {
  onCreateBoardCatgory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBoardCatgorySubscriptionVariables,
  APITypes.OnCreateBoardCatgorySubscription
>;
export const onUpdateBoardCatgory = /* GraphQL */ `subscription OnUpdateBoardCatgory(
  $filter: ModelSubscriptionBoardCatgoryFilterInput
) {
  onUpdateBoardCatgory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBoardCatgorySubscriptionVariables,
  APITypes.OnUpdateBoardCatgorySubscription
>;
export const onDeleteBoardCatgory = /* GraphQL */ `subscription OnDeleteBoardCatgory(
  $filter: ModelSubscriptionBoardCatgoryFilterInput
) {
  onDeleteBoardCatgory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBoardCatgorySubscriptionVariables,
  APITypes.OnDeleteBoardCatgorySubscription
>;
export const onCreateBoard = /* GraphQL */ `subscription OnCreateBoard($filter: ModelSubscriptionBoardFilterInput) {
  onCreateBoard(filter: $filter) {
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
    boardItems {
      items {
        id
        seq
        boardId
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
          boardItems {
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
        BoardItemComments {
          items {
            id
            seq
            boardItemId
            comment
            author
            createdAt
            updatedAt
            boardItemBoardItemCommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        boardItemCategoryId
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
` as GeneratedSubscription<
  APITypes.OnCreateBoardSubscriptionVariables,
  APITypes.OnCreateBoardSubscription
>;
export const onUpdateBoard = /* GraphQL */ `subscription OnUpdateBoard($filter: ModelSubscriptionBoardFilterInput) {
  onUpdateBoard(filter: $filter) {
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
    boardItems {
      items {
        id
        seq
        boardId
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
          boardItems {
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
        BoardItemComments {
          items {
            id
            seq
            boardItemId
            comment
            author
            createdAt
            updatedAt
            boardItemBoardItemCommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        boardItemCategoryId
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
` as GeneratedSubscription<
  APITypes.OnUpdateBoardSubscriptionVariables,
  APITypes.OnUpdateBoardSubscription
>;
export const onDeleteBoard = /* GraphQL */ `subscription OnDeleteBoard($filter: ModelSubscriptionBoardFilterInput) {
  onDeleteBoard(filter: $filter) {
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
    boardItems {
      items {
        id
        seq
        boardId
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
          boardItems {
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
        BoardItemComments {
          items {
            id
            seq
            boardItemId
            comment
            author
            createdAt
            updatedAt
            boardItemBoardItemCommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        boardItemCategoryId
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
` as GeneratedSubscription<
  APITypes.OnDeleteBoardSubscriptionVariables,
  APITypes.OnDeleteBoardSubscription
>;
export const onCreateAttachment = /* GraphQL */ `subscription OnCreateAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
) {
  onCreateAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAttachmentSubscriptionVariables,
  APITypes.OnCreateAttachmentSubscription
>;
export const onUpdateAttachment = /* GraphQL */ `subscription OnUpdateAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
) {
  onUpdateAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAttachmentSubscriptionVariables,
  APITypes.OnUpdateAttachmentSubscription
>;
export const onDeleteAttachment = /* GraphQL */ `subscription OnDeleteAttachment(
  $filter: ModelSubscriptionAttachmentFilterInput
) {
  onDeleteAttachment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAttachmentSubscriptionVariables,
  APITypes.OnDeleteAttachmentSubscription
>;
export const onCreateBoardItem = /* GraphQL */ `subscription OnCreateBoardItem($filter: ModelSubscriptionBoardItemFilterInput) {
  onCreateBoardItem(filter: $filter) {
    id
    seq
    boardId
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
      boardItems {
        items {
          id
          seq
          boardId
          board {
            id
            title
            header
            footer
            listViewItems
            excludeNoticeFlag
            type
            createdAt
            updatedAt
            __typename
          }
          category {
            id
            name
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
            nextToken
            __typename
          }
          isNotice
          views
          BoardItemComments {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          boardItemCategoryId
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
    BoardItemComments {
      items {
        id
        seq
        boardItemId
        boardItem {
          id
          seq
          boardId
          board {
            id
            title
            header
            footer
            listViewItems
            excludeNoticeFlag
            type
            createdAt
            updatedAt
            __typename
          }
          category {
            id
            name
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
            nextToken
            __typename
          }
          isNotice
          views
          BoardItemComments {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          boardItemCategoryId
          __typename
        }
        comment
        author
        createdAt
        updatedAt
        boardItemBoardItemCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    boardItemCategoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBoardItemSubscriptionVariables,
  APITypes.OnCreateBoardItemSubscription
>;
export const onUpdateBoardItem = /* GraphQL */ `subscription OnUpdateBoardItem($filter: ModelSubscriptionBoardItemFilterInput) {
  onUpdateBoardItem(filter: $filter) {
    id
    seq
    boardId
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
      boardItems {
        items {
          id
          seq
          boardId
          board {
            id
            title
            header
            footer
            listViewItems
            excludeNoticeFlag
            type
            createdAt
            updatedAt
            __typename
          }
          category {
            id
            name
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
            nextToken
            __typename
          }
          isNotice
          views
          BoardItemComments {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          boardItemCategoryId
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
    BoardItemComments {
      items {
        id
        seq
        boardItemId
        boardItem {
          id
          seq
          boardId
          board {
            id
            title
            header
            footer
            listViewItems
            excludeNoticeFlag
            type
            createdAt
            updatedAt
            __typename
          }
          category {
            id
            name
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
            nextToken
            __typename
          }
          isNotice
          views
          BoardItemComments {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          boardItemCategoryId
          __typename
        }
        comment
        author
        createdAt
        updatedAt
        boardItemBoardItemCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    boardItemCategoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBoardItemSubscriptionVariables,
  APITypes.OnUpdateBoardItemSubscription
>;
export const onDeleteBoardItem = /* GraphQL */ `subscription OnDeleteBoardItem($filter: ModelSubscriptionBoardItemFilterInput) {
  onDeleteBoardItem(filter: $filter) {
    id
    seq
    boardId
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
      boardItems {
        items {
          id
          seq
          boardId
          board {
            id
            title
            header
            footer
            listViewItems
            excludeNoticeFlag
            type
            createdAt
            updatedAt
            __typename
          }
          category {
            id
            name
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
            nextToken
            __typename
          }
          isNotice
          views
          BoardItemComments {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          boardItemCategoryId
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
    BoardItemComments {
      items {
        id
        seq
        boardItemId
        boardItem {
          id
          seq
          boardId
          board {
            id
            title
            header
            footer
            listViewItems
            excludeNoticeFlag
            type
            createdAt
            updatedAt
            __typename
          }
          category {
            id
            name
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
            nextToken
            __typename
          }
          isNotice
          views
          BoardItemComments {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          boardItemCategoryId
          __typename
        }
        comment
        author
        createdAt
        updatedAt
        boardItemBoardItemCommentsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    boardItemCategoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBoardItemSubscriptionVariables,
  APITypes.OnDeleteBoardItemSubscription
>;
export const onCreateBoardItemComment = /* GraphQL */ `subscription OnCreateBoardItemComment(
  $filter: ModelSubscriptionBoardItemCommentFilterInput
) {
  onCreateBoardItemComment(filter: $filter) {
    id
    seq
    boardItemId
    boardItem {
      id
      seq
      boardId
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
        boardItems {
          items {
            id
            seq
            boardId
            title
            content
            tag
            author
            isNotice
            views
            createdAt
            updatedAt
            boardItemCategoryId
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
      BoardItemComments {
        items {
          id
          seq
          boardItemId
          boardItem {
            id
            seq
            boardId
            title
            content
            tag
            author
            isNotice
            views
            createdAt
            updatedAt
            boardItemCategoryId
            __typename
          }
          comment
          author
          createdAt
          updatedAt
          boardItemBoardItemCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      boardItemCategoryId
      __typename
    }
    comment
    author
    createdAt
    updatedAt
    boardItemBoardItemCommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBoardItemCommentSubscriptionVariables,
  APITypes.OnCreateBoardItemCommentSubscription
>;
export const onUpdateBoardItemComment = /* GraphQL */ `subscription OnUpdateBoardItemComment(
  $filter: ModelSubscriptionBoardItemCommentFilterInput
) {
  onUpdateBoardItemComment(filter: $filter) {
    id
    seq
    boardItemId
    boardItem {
      id
      seq
      boardId
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
        boardItems {
          items {
            id
            seq
            boardId
            title
            content
            tag
            author
            isNotice
            views
            createdAt
            updatedAt
            boardItemCategoryId
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
      BoardItemComments {
        items {
          id
          seq
          boardItemId
          boardItem {
            id
            seq
            boardId
            title
            content
            tag
            author
            isNotice
            views
            createdAt
            updatedAt
            boardItemCategoryId
            __typename
          }
          comment
          author
          createdAt
          updatedAt
          boardItemBoardItemCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      boardItemCategoryId
      __typename
    }
    comment
    author
    createdAt
    updatedAt
    boardItemBoardItemCommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBoardItemCommentSubscriptionVariables,
  APITypes.OnUpdateBoardItemCommentSubscription
>;
export const onDeleteBoardItemComment = /* GraphQL */ `subscription OnDeleteBoardItemComment(
  $filter: ModelSubscriptionBoardItemCommentFilterInput
) {
  onDeleteBoardItemComment(filter: $filter) {
    id
    seq
    boardItemId
    boardItem {
      id
      seq
      boardId
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
        boardItems {
          items {
            id
            seq
            boardId
            title
            content
            tag
            author
            isNotice
            views
            createdAt
            updatedAt
            boardItemCategoryId
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
      BoardItemComments {
        items {
          id
          seq
          boardItemId
          boardItem {
            id
            seq
            boardId
            title
            content
            tag
            author
            isNotice
            views
            createdAt
            updatedAt
            boardItemCategoryId
            __typename
          }
          comment
          author
          createdAt
          updatedAt
          boardItemBoardItemCommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      boardItemCategoryId
      __typename
    }
    comment
    author
    createdAt
    updatedAt
    boardItemBoardItemCommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBoardItemCommentSubscriptionVariables,
  APITypes.OnDeleteBoardItemCommentSubscription
>;
