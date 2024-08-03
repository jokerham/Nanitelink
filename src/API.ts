/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMemberRoleInput = {
  id?: string | null,
  roleName: string,
  description?: string | null,
  picture?: string | null,
};

export type ModelMemberRoleConditionInput = {
  roleName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelMemberRoleConditionInput | null > | null,
  or?: Array< ModelMemberRoleConditionInput | null > | null,
  not?: ModelMemberRoleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type MemberRole = {
  __typename: "MemberRole",
  id: string,
  roleName: string,
  description?: string | null,
  picture?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMemberRoleInput = {
  id: string,
  roleName?: string | null,
  description?: string | null,
  picture?: string | null,
};

export type DeleteMemberRoleInput = {
  id: string,
};

export type ModelMemberRoleFilterInput = {
  id?: ModelIDInput | null,
  roleName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  picture?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMemberRoleFilterInput | null > | null,
  or?: Array< ModelMemberRoleFilterInput | null > | null,
  not?: ModelMemberRoleFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMemberRoleConnection = {
  __typename: "ModelMemberRoleConnection",
  items:  Array<MemberRole | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMemberRoleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roleName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  picture?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemberRoleFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberRoleFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateMemberRoleMutationVariables = {
  input: CreateMemberRoleInput,
  condition?: ModelMemberRoleConditionInput | null,
};

export type CreateMemberRoleMutation = {
  createMemberRole?:  {
    __typename: "MemberRole",
    id: string,
    roleName: string,
    description?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberRoleMutationVariables = {
  input: UpdateMemberRoleInput,
  condition?: ModelMemberRoleConditionInput | null,
};

export type UpdateMemberRoleMutation = {
  updateMemberRole?:  {
    __typename: "MemberRole",
    id: string,
    roleName: string,
    description?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberRoleMutationVariables = {
  input: DeleteMemberRoleInput,
  condition?: ModelMemberRoleConditionInput | null,
};

export type DeleteMemberRoleMutation = {
  deleteMemberRole?:  {
    __typename: "MemberRole",
    id: string,
    roleName: string,
    description?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMemberRoleQueryVariables = {
  id: string,
};

export type GetMemberRoleQuery = {
  getMemberRole?:  {
    __typename: "MemberRole",
    id: string,
    roleName: string,
    description?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMemberRolesQueryVariables = {
  filter?: ModelMemberRoleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemberRolesQuery = {
  listMemberRoles?:  {
    __typename: "ModelMemberRoleConnection",
    items:  Array< {
      __typename: "MemberRole",
      id: string,
      roleName: string,
      description?: string | null,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMemberRoleSubscriptionVariables = {
  filter?: ModelSubscriptionMemberRoleFilterInput | null,
};

export type OnCreateMemberRoleSubscription = {
  onCreateMemberRole?:  {
    __typename: "MemberRole",
    id: string,
    roleName: string,
    description?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberRoleSubscriptionVariables = {
  filter?: ModelSubscriptionMemberRoleFilterInput | null,
};

export type OnUpdateMemberRoleSubscription = {
  onUpdateMemberRole?:  {
    __typename: "MemberRole",
    id: string,
    roleName: string,
    description?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberRoleSubscriptionVariables = {
  filter?: ModelSubscriptionMemberRoleFilterInput | null,
};

export type OnDeleteMemberRoleSubscription = {
  onDeleteMemberRole?:  {
    __typename: "MemberRole",
    id: string,
    roleName: string,
    description?: string | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
