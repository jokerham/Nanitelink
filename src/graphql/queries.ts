/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getModule = /* GraphQL */ `query GetModule($id: ID!) {
  getModule(id: $id) {
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
          id
          inputType
          label
          defaultValue
          __typename
        }
        menus {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMenusQueryVariables, APITypes.ListMenusQuery>;
