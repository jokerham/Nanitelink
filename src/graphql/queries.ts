/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMenu = /* GraphQL */ `query GetMenu($id: ID!) {
  getMenu(id: $id) {
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
      module
      parameters
      url
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMenusQueryVariables, APITypes.ListMenusQuery>;
