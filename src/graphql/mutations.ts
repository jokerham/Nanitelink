/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMenu = /* GraphQL */ `mutation CreateMenu(
  $input: CreateMenuInput!
  $condition: ModelMenuConditionInput
) {
  createMenu(input: $input, condition: $condition) {
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
    module
    parameters
    url
    createdAt
    updatedAt
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
    module
    parameters
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMenuMutationVariables,
  APITypes.DeleteMenuMutation
>;
