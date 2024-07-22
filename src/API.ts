/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  cognitoId: string,
  userId: string,
  userEmail: string,
  userName: string,
  userNickname: string,
  passwordRecoveryQuestion?: string | null,
  userHomepage?: string | null,
  userBlogPage?: string | null,
  userBirthday?: string | null,
  profileImageUrl?: string | null,
  additional?: string | null,
};

export type ModelUserConditionInput = {
  cognitoId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  userNickname?: ModelStringInput | null,
  passwordRecoveryQuestion?: ModelStringInput | null,
  userHomepage?: ModelStringInput | null,
  userBlogPage?: ModelStringInput | null,
  userBirthday?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  additional?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  cognitoId: string,
  userId: string,
  userEmail: string,
  userName: string,
  userNickname: string,
  passwordRecoveryQuestion?: string | null,
  userHomepage?: string | null,
  userBlogPage?: string | null,
  userBirthday?: string | null,
  profileImageUrl?: string | null,
  additional?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  cognitoId?: string | null,
  userId?: string | null,
  userEmail?: string | null,
  userName?: string | null,
  userNickname?: string | null,
  passwordRecoveryQuestion?: string | null,
  userHomepage?: string | null,
  userBlogPage?: string | null,
  userBirthday?: string | null,
  profileImageUrl?: string | null,
  additional?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  userNickname?: ModelStringInput | null,
  passwordRecoveryQuestion?: ModelStringInput | null,
  userHomepage?: ModelStringInput | null,
  userBlogPage?: ModelStringInput | null,
  userBirthday?: ModelStringInput | null,
  profileImageUrl?: ModelStringInput | null,
  additional?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
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

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  userEmail?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  userNickname?: ModelSubscriptionStringInput | null,
  passwordRecoveryQuestion?: ModelSubscriptionStringInput | null,
  userHomepage?: ModelSubscriptionStringInput | null,
  userBlogPage?: ModelSubscriptionStringInput | null,
  userBirthday?: ModelSubscriptionStringInput | null,
  profileImageUrl?: ModelSubscriptionStringInput | null,
  additional?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
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

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    userId: string,
    userEmail: string,
    userName: string,
    userNickname: string,
    passwordRecoveryQuestion?: string | null,
    userHomepage?: string | null,
    userBlogPage?: string | null,
    userBirthday?: string | null,
    profileImageUrl?: string | null,
    additional?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    userId: string,
    userEmail: string,
    userName: string,
    userNickname: string,
    passwordRecoveryQuestion?: string | null,
    userHomepage?: string | null,
    userBlogPage?: string | null,
    userBirthday?: string | null,
    profileImageUrl?: string | null,
    additional?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    userId: string,
    userEmail: string,
    userName: string,
    userNickname: string,
    passwordRecoveryQuestion?: string | null,
    userHomepage?: string | null,
    userBlogPage?: string | null,
    userBirthday?: string | null,
    profileImageUrl?: string | null,
    additional?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    userId: string,
    userEmail: string,
    userName: string,
    userNickname: string,
    passwordRecoveryQuestion?: string | null,
    userHomepage?: string | null,
    userBlogPage?: string | null,
    userBirthday?: string | null,
    profileImageUrl?: string | null,
    additional?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoId: string,
      userId: string,
      userEmail: string,
      userName: string,
      userNickname: string,
      passwordRecoveryQuestion?: string | null,
      userHomepage?: string | null,
      userBlogPage?: string | null,
      userBirthday?: string | null,
      profileImageUrl?: string | null,
      additional?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    userId: string,
    userEmail: string,
    userName: string,
    userNickname: string,
    passwordRecoveryQuestion?: string | null,
    userHomepage?: string | null,
    userBlogPage?: string | null,
    userBirthday?: string | null,
    profileImageUrl?: string | null,
    additional?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    userId: string,
    userEmail: string,
    userName: string,
    userNickname: string,
    passwordRecoveryQuestion?: string | null,
    userHomepage?: string | null,
    userBlogPage?: string | null,
    userBirthday?: string | null,
    profileImageUrl?: string | null,
    additional?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    userId: string,
    userEmail: string,
    userName: string,
    userNickname: string,
    passwordRecoveryQuestion?: string | null,
    userHomepage?: string | null,
    userBlogPage?: string | null,
    userBirthday?: string | null,
    profileImageUrl?: string | null,
    additional?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
