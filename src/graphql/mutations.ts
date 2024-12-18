/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createParameter = /* GraphQL */ `mutation CreateParameter(
  $input: CreateParameterInput!
  $condition: ModelParameterConditionInput
) {
  createParameter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateParameterMutationVariables,
  APITypes.CreateParameterMutation
>;
export const updateParameter = /* GraphQL */ `mutation UpdateParameter(
  $input: UpdateParameterInput!
  $condition: ModelParameterConditionInput
) {
  updateParameter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateParameterMutationVariables,
  APITypes.UpdateParameterMutation
>;
export const deleteParameter = /* GraphQL */ `mutation DeleteParameter(
  $input: DeleteParameterInput!
  $condition: ModelParameterConditionInput
) {
  deleteParameter(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteParameterMutationVariables,
  APITypes.DeleteParameterMutation
>;
export const createModule = /* GraphQL */ `mutation CreateModule(
  $input: CreateModuleInput!
  $condition: ModelModuleConditionInput
) {
  createModule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateModuleMutationVariables,
  APITypes.CreateModuleMutation
>;
export const updateModule = /* GraphQL */ `mutation UpdateModule(
  $input: UpdateModuleInput!
  $condition: ModelModuleConditionInput
) {
  updateModule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateModuleMutationVariables,
  APITypes.UpdateModuleMutation
>;
export const deleteModule = /* GraphQL */ `mutation DeleteModule(
  $input: DeleteModuleInput!
  $condition: ModelModuleConditionInput
) {
  deleteModule(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteModuleMutationVariables,
  APITypes.DeleteModuleMutation
>;
export const createMenu = /* GraphQL */ `mutation CreateMenu(
  $input: CreateMenuInput!
  $condition: ModelMenuConditionInput
) {
  createMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMenuMutationVariables,
  APITypes.CreateMenuMutation
>;
export const updateMenu = /* GraphQL */ `mutation UpdateMenu(
  $input: UpdateMenuInput!
  $condition: ModelMenuConditionInput
) {
  updateMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMenuMutationVariables,
  APITypes.UpdateMenuMutation
>;
export const deleteMenu = /* GraphQL */ `mutation DeleteMenu(
  $input: DeleteMenuInput!
  $condition: ModelMenuConditionInput
) {
  deleteMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMenuMutationVariables,
  APITypes.DeleteMenuMutation
>;
export const createDocument = /* GraphQL */ `mutation CreateDocument(
  $input: CreateDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  createDocument(input: $input, condition: $condition) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDocumentMutationVariables,
  APITypes.CreateDocumentMutation
>;
export const updateDocument = /* GraphQL */ `mutation UpdateDocument(
  $input: UpdateDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  updateDocument(input: $input, condition: $condition) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDocumentMutationVariables,
  APITypes.UpdateDocumentMutation
>;
export const deleteDocument = /* GraphQL */ `mutation DeleteDocument(
  $input: DeleteDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  deleteDocument(input: $input, condition: $condition) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDocumentMutationVariables,
  APITypes.DeleteDocumentMutation
>;
export const createBoardCatgory = /* GraphQL */ `mutation CreateBoardCatgory(
  $input: CreateBoardCatgoryInput!
  $condition: ModelBoardCatgoryConditionInput
) {
  createBoardCatgory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBoardCatgoryMutationVariables,
  APITypes.CreateBoardCatgoryMutation
>;
export const updateBoardCatgory = /* GraphQL */ `mutation UpdateBoardCatgory(
  $input: UpdateBoardCatgoryInput!
  $condition: ModelBoardCatgoryConditionInput
) {
  updateBoardCatgory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBoardCatgoryMutationVariables,
  APITypes.UpdateBoardCatgoryMutation
>;
export const deleteBoardCatgory = /* GraphQL */ `mutation DeleteBoardCatgory(
  $input: DeleteBoardCatgoryInput!
  $condition: ModelBoardCatgoryConditionInput
) {
  deleteBoardCatgory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBoardCatgoryMutationVariables,
  APITypes.DeleteBoardCatgoryMutation
>;
export const createBoard = /* GraphQL */ `mutation CreateBoard(
  $input: CreateBoardInput!
  $condition: ModelBoardConditionInput
) {
  createBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBoardMutationVariables,
  APITypes.CreateBoardMutation
>;
export const updateBoard = /* GraphQL */ `mutation UpdateBoard(
  $input: UpdateBoardInput!
  $condition: ModelBoardConditionInput
) {
  updateBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBoardMutationVariables,
  APITypes.UpdateBoardMutation
>;
export const deleteBoard = /* GraphQL */ `mutation DeleteBoard(
  $input: DeleteBoardInput!
  $condition: ModelBoardConditionInput
) {
  deleteBoard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBoardMutationVariables,
  APITypes.DeleteBoardMutation
>;
export const createAttachment = /* GraphQL */ `mutation CreateAttachment(
  $input: CreateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  createAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAttachmentMutationVariables,
  APITypes.CreateAttachmentMutation
>;
export const updateAttachment = /* GraphQL */ `mutation UpdateAttachment(
  $input: UpdateAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  updateAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAttachmentMutationVariables,
  APITypes.UpdateAttachmentMutation
>;
export const deleteAttachment = /* GraphQL */ `mutation DeleteAttachment(
  $input: DeleteAttachmentInput!
  $condition: ModelAttachmentConditionInput
) {
  deleteAttachment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAttachmentMutationVariables,
  APITypes.DeleteAttachmentMutation
>;
export const createBoardItem = /* GraphQL */ `mutation CreateBoardItem(
  $input: CreateBoardItemInput!
  $condition: ModelBoardItemConditionInput
) {
  createBoardItem(input: $input, condition: $condition) {
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
    boardItemCategoryId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBoardItemMutationVariables,
  APITypes.CreateBoardItemMutation
>;
export const updateBoardItem = /* GraphQL */ `mutation UpdateBoardItem(
  $input: UpdateBoardItemInput!
  $condition: ModelBoardItemConditionInput
) {
  updateBoardItem(input: $input, condition: $condition) {
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
    boardItemCategoryId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBoardItemMutationVariables,
  APITypes.UpdateBoardItemMutation
>;
export const deleteBoardItem = /* GraphQL */ `mutation DeleteBoardItem(
  $input: DeleteBoardItemInput!
  $condition: ModelBoardItemConditionInput
) {
  deleteBoardItem(input: $input, condition: $condition) {
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
    boardItemCategoryId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBoardItemMutationVariables,
  APITypes.DeleteBoardItemMutation
>;
export const createBoardItemComment = /* GraphQL */ `mutation CreateBoardItemComment(
  $input: CreateBoardItemCommentInput!
  $condition: ModelBoardItemCommentConditionInput
) {
  createBoardItemComment(input: $input, condition: $condition) {
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
      boardItemCategoryId
      __typename
    }
    comment
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBoardItemCommentMutationVariables,
  APITypes.CreateBoardItemCommentMutation
>;
export const updateBoardItemComment = /* GraphQL */ `mutation UpdateBoardItemComment(
  $input: UpdateBoardItemCommentInput!
  $condition: ModelBoardItemCommentConditionInput
) {
  updateBoardItemComment(input: $input, condition: $condition) {
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
      boardItemCategoryId
      __typename
    }
    comment
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBoardItemCommentMutationVariables,
  APITypes.UpdateBoardItemCommentMutation
>;
export const deleteBoardItemComment = /* GraphQL */ `mutation DeleteBoardItemComment(
  $input: DeleteBoardItemCommentInput!
  $condition: ModelBoardItemCommentConditionInput
) {
  deleteBoardItemComment(input: $input, condition: $condition) {
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
      boardItemCategoryId
      __typename
    }
    comment
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBoardItemCommentMutationVariables,
  APITypes.DeleteBoardItemCommentMutation
>;
