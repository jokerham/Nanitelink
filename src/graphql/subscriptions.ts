/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMenu = /* GraphQL */ `subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
  onCreateMenu(filter: $filter) {
    id
    name
    parent
    menuType
    module
    parameters
    url
    createdAt
    updatedAt
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
    module
    parameters
    url
    createdAt
    updatedAt
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
    module
    parameters
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMenuSubscriptionVariables,
  APITypes.OnDeleteMenuSubscription
>;
