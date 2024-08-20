/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMenuInput = {
  id?: string | null,
  name: string,
  parent?: string | null,
  menuType: MenuType,
  module?: string | null,
  parameters?: string | null,
  url?: string | null,
};

export enum MenuType {
  Internal = "Internal",
  External = "External",
}


export type ModelMenuConditionInput = {
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  menuType?: ModelMenuTypeInput | null,
  module?: ModelStringInput | null,
  parameters?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
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

export type ModelMenuTypeInput = {
  eq?: MenuType | null,
  ne?: MenuType | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  name: string,
  parent?: string | null,
  menuType: MenuType,
  module?: string | null,
  parameters?: string | null,
  url?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMenuInput = {
  id: string,
  name?: string | null,
  parent?: string | null,
  menuType?: MenuType | null,
  module?: string | null,
  parameters?: string | null,
  url?: string | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  menuType?: ModelMenuTypeInput | null,
  module?: ModelStringInput | null,
  parameters?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
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

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  parent?: ModelSubscriptionStringInput | null,
  menuType?: ModelSubscriptionStringInput | null,
  module?: ModelSubscriptionStringInput | null,
  parameters?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuFilterInput | null > | null,
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

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    parent?: string | null,
    menuType: MenuType,
    module?: string | null,
    parameters?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    parent?: string | null,
    menuType: MenuType,
    module?: string | null,
    parameters?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    parent?: string | null,
    menuType: MenuType,
    module?: string | null,
    parameters?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    parent?: string | null,
    menuType: MenuType,
    module?: string | null,
    parameters?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus?:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      name: string,
      parent?: string | null,
      menuType: MenuType,
      module?: string | null,
      parameters?: string | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    parent?: string | null,
    menuType: MenuType,
    module?: string | null,
    parameters?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    parent?: string | null,
    menuType: MenuType,
    module?: string | null,
    parameters?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscriptionVariables = {
  filter?: ModelSubscriptionMenuFilterInput | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu?:  {
    __typename: "Menu",
    id: string,
    name: string,
    parent?: string | null,
    menuType: MenuType,
    module?: string | null,
    parameters?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
