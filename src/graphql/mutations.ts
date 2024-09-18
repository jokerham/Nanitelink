/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createModule = /* GraphQL */ `mutation CreateModule(
  $input: CreateModuleInput!
  $condition: ModelModuleConditionInput
) {
  createModule(input: $input, condition: $condition) {
    id
    name
    parameters {
      id
      inputType
      label
      defaultValue
      optionValues {
        value
        label
        __typename
      }
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
        parameterSettings
        url
        createdAt
        updatedAt
        moduleMenusId
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
      id
      inputType
      label
      defaultValue
      optionValues {
        value
        label
        __typename
      }
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
        parameterSettings
        url
        createdAt
        updatedAt
        moduleMenusId
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
      id
      inputType
      label
      defaultValue
      optionValues {
        value
        label
        __typename
      }
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
        parameterSettings
        url
        createdAt
        updatedAt
        moduleMenusId
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
        id
        inputType
        label
        defaultValue
        optionValues {
          value
          label
          __typename
        }
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          parameterSettings
          url
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    parameterSettings
    url
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
        id
        inputType
        label
        defaultValue
        optionValues {
          value
          label
          __typename
        }
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          parameterSettings
          url
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    parameterSettings
    url
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
        id
        inputType
        label
        defaultValue
        optionValues {
          value
          label
          __typename
        }
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          parameterSettings
          url
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    parameterSettings
    url
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
