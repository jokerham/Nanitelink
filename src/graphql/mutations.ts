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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
export const createAction = /* GraphQL */ `mutation CreateAction(
  $input: CreateActionInput!
  $condition: ModelActionConditionInput
) {
  createAction(input: $input, condition: $condition) {
    id
    name
    isIndex
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
    moduleActionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActionMutationVariables,
  APITypes.CreateActionMutation
>;
export const updateAction = /* GraphQL */ `mutation UpdateAction(
  $input: UpdateActionInput!
  $condition: ModelActionConditionInput
) {
  updateAction(input: $input, condition: $condition) {
    id
    name
    isIndex
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
    moduleActionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActionMutationVariables,
  APITypes.UpdateActionMutation
>;
export const deleteAction = /* GraphQL */ `mutation DeleteAction(
  $input: DeleteActionInput!
  $condition: ModelActionConditionInput
) {
  deleteAction(input: $input, condition: $condition) {
    id
    name
    isIndex
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
    moduleActionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActionMutationVariables,
  APITypes.DeleteActionMutation
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
          menus {
            nextToken
            __typename
          }
          actions {
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
    menus {
      items {
        id
        name
        parent
        menuType
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
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
        moduleMenusId
        __typename
      }
      nextToken
      __typename
    }
    actions {
      items {
        id
        name
        isIndex
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleActionsId
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
          menus {
            nextToken
            __typename
          }
          actions {
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
    menus {
      items {
        id
        name
        parent
        menuType
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
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
        moduleMenusId
        __typename
      }
      nextToken
      __typename
    }
    actions {
      items {
        id
        name
        isIndex
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleActionsId
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
          menus {
            nextToken
            __typename
          }
          actions {
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
    menus {
      items {
        id
        name
        parent
        menuType
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
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
        moduleMenusId
        __typename
      }
      nextToken
      __typename
    }
    actions {
      items {
        id
        name
        isIndex
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleActionsId
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
    moduleMenusId
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
    moduleMenusId
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
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
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
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
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
    moduleMenusId
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
