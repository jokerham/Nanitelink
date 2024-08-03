/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMemberRole = /* GraphQL */ `subscription OnCreateMemberRole(
  $filter: ModelSubscriptionMemberRoleFilterInput
) {
  onCreateMemberRole(filter: $filter) {
    id
    roleName
    description
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMemberRoleSubscriptionVariables,
  APITypes.OnCreateMemberRoleSubscription
>;
export const onUpdateMemberRole = /* GraphQL */ `subscription OnUpdateMemberRole(
  $filter: ModelSubscriptionMemberRoleFilterInput
) {
  onUpdateMemberRole(filter: $filter) {
    id
    roleName
    description
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMemberRoleSubscriptionVariables,
  APITypes.OnUpdateMemberRoleSubscription
>;
export const onDeleteMemberRole = /* GraphQL */ `subscription OnDeleteMemberRole(
  $filter: ModelSubscriptionMemberRoleFilterInput
) {
  onDeleteMemberRole(filter: $filter) {
    id
    roleName
    description
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMemberRoleSubscriptionVariables,
  APITypes.OnDeleteMemberRoleSubscription
>;
