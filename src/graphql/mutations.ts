/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMemberRole = /* GraphQL */ `mutation CreateMemberRole(
  $input: CreateMemberRoleInput!
  $condition: ModelMemberRoleConditionInput
) {
  createMemberRole(input: $input, condition: $condition) {
    id
    roleName
    description
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMemberRoleMutationVariables,
  APITypes.CreateMemberRoleMutation
>;
export const updateMemberRole = /* GraphQL */ `mutation UpdateMemberRole(
  $input: UpdateMemberRoleInput!
  $condition: ModelMemberRoleConditionInput
) {
  updateMemberRole(input: $input, condition: $condition) {
    id
    roleName
    description
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMemberRoleMutationVariables,
  APITypes.UpdateMemberRoleMutation
>;
export const deleteMemberRole = /* GraphQL */ `mutation DeleteMemberRole(
  $input: DeleteMemberRoleInput!
  $condition: ModelMemberRoleConditionInput
) {
  deleteMemberRole(input: $input, condition: $condition) {
    id
    roleName
    description
    picture
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMemberRoleMutationVariables,
  APITypes.DeleteMemberRoleMutation
>;
