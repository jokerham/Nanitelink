/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMemberRole = /* GraphQL */ `query GetMemberRole($id: ID!) {
  getMemberRole(id: $id) {
    id
    roleName
    description
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMemberRoleQueryVariables,
  APITypes.GetMemberRoleQuery
>;
export const listMemberRoles = /* GraphQL */ `query ListMemberRoles(
  $filter: ModelMemberRoleFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemberRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      roleName
      description
      picture
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMemberRolesQueryVariables,
  APITypes.ListMemberRolesQuery
>;
