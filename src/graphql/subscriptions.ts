/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateModule = /* GraphQL */ `subscription OnCreateModule($filter: ModelSubscriptionModuleFilterInput) {
  onCreateModule(filter: $filter) {
    id
    name
    parameters
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
}
` as GeneratedSubscription<
  APITypes.OnCreateModuleSubscriptionVariables,
  APITypes.OnCreateModuleSubscription
>;
export const onUpdateModule = /* GraphQL */ `subscription OnUpdateModule($filter: ModelSubscriptionModuleFilterInput) {
  onUpdateModule(filter: $filter) {
    id
    name
    parameters
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateModuleSubscriptionVariables,
  APITypes.OnUpdateModuleSubscription
>;
export const onDeleteModule = /* GraphQL */ `subscription OnDeleteModule($filter: ModelSubscriptionModuleFilterInput) {
  onDeleteModule(filter: $filter) {
    id
    name
    parameters
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
      parameters
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
      parameters
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
      parameters
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteMenuSubscriptionVariables,
  APITypes.OnDeleteMenuSubscription
>;
