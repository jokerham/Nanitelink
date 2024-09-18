/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateModuleInput = {
  id?: string | null,
  name: string,
  parameters?: Array< TParameterInput | null > | null,
};

export type TParameterInput = {
  id: string,
  inputType: InputType,
  label: string,
  defaultValue?: string | null,
  optionValues?: Array< TOptionValueInput | null > | null,
};

export enum InputType {
  select = "select",
  text = "text",
  readio = "readio",
  checkbox = "checkbox",
  textarea = "textarea",
  date = "date",
  datetime = "datetime",
  time = "time",
}


export type TOptionValueInput = {
  value?: string | null,
  label?: string | null,
};

export type ModelModuleConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelModuleConditionInput | null > | null,
  or?: Array< ModelModuleConditionInput | null > | null,
  not?: ModelModuleConditionInput | null,
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

export type Module = {
  __typename: "Module",
  id: string,
  name: string,
  parameters?:  Array<TParameter | null > | null,
  menus?: ModelMenuConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type TParameter = {
  __typename: "TParameter",
  id: string,
  inputType: InputType,
  label: string,
  defaultValue?: string | null,
  optionValues?:  Array<TOptionValue | null > | null,
};

export type TOptionValue = {
  __typename: "TOptionValue",
  value?: string | null,
  label?: string | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
};

export type Menu = {
  __typename: "Menu",
  id: string,
  name: string,
  parent?: string | null,
  menuType: MenuType,
  module: Module,
  parameterSettings?: string | null,
  url?: string | null,
  createdAt: string,
  updatedAt: string,
  moduleMenusId?: string | null,
};

export enum MenuType {
  Internal = "Internal",
  External = "External",
}


export type UpdateModuleInput = {
  id: string,
  name?: string | null,
  parameters?: Array< TParameterInput | null > | null,
};

export type DeleteModuleInput = {
  id: string,
};

export type CreateMenuInput = {
  id?: string | null,
  name: string,
  parent?: string | null,
  menuType: MenuType,
  parameterSettings?: string | null,
  url?: string | null,
  moduleMenusId?: string | null,
};

export type ModelMenuConditionInput = {
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  menuType?: ModelMenuTypeInput | null,
  parameterSettings?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  moduleMenusId?: ModelIDInput | null,
};

export type ModelMenuTypeInput = {
  eq?: MenuType | null,
  ne?: MenuType | null,
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

export type UpdateMenuInput = {
  id: string,
  name?: string | null,
  parent?: string | null,
  menuType?: MenuType | null,
  parameterSettings?: string | null,
  url?: string | null,
  moduleMenusId?: string | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type ModelModuleFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelModuleFilterInput | null > | null,
  or?: Array< ModelModuleFilterInput | null > | null,
  not?: ModelModuleFilterInput | null,
};

export type ModelModuleConnection = {
  __typename: "ModelModuleConnection",
  items:  Array<Module | null >,
  nextToken?: string | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  menuType?: ModelMenuTypeInput | null,
  parameterSettings?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
  moduleMenusId?: ModelIDInput | null,
};

export type ModelSubscriptionModuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  moduleMenusId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  parent?: ModelSubscriptionStringInput | null,
  menuType?: ModelSubscriptionStringInput | null,
  parameterSettings?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuFilterInput | null > | null,
};

export type CreateModuleMutationVariables = {
  input: CreateModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type CreateModuleMutation = {
  createModule?:  {
    __typename: "Module",
    id: string,
    name: string,
    parameters?:  Array< {
      __typename: "TParameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
    } | null > | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        name: string,
        parent?: string | null,
        menuType: MenuType,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        parameterSettings?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateModuleMutationVariables = {
  input: UpdateModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type UpdateModuleMutation = {
  updateModule?:  {
    __typename: "Module",
    id: string,
    name: string,
    parameters?:  Array< {
      __typename: "TParameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
    } | null > | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        name: string,
        parent?: string | null,
        menuType: MenuType,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        parameterSettings?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteModuleMutationVariables = {
  input: DeleteModuleInput,
  condition?: ModelModuleConditionInput | null,
};

export type DeleteModuleMutation = {
  deleteModule?:  {
    __typename: "Module",
    id: string,
    name: string,
    parameters?:  Array< {
      __typename: "TParameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
    } | null > | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        name: string,
        parent?: string | null,
        menuType: MenuType,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        parameterSettings?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    parameterSettings?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
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
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    parameterSettings?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
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
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    parameterSettings?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
  } | null,
};

export type GetModuleQueryVariables = {
  id: string,
};

export type GetModuleQuery = {
  getModule?:  {
    __typename: "Module",
    id: string,
    name: string,
    parameters?:  Array< {
      __typename: "TParameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
    } | null > | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        name: string,
        parent?: string | null,
        menuType: MenuType,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        parameterSettings?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListModulesQueryVariables = {
  filter?: ModelModuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListModulesQuery = {
  listModules?:  {
    __typename: "ModelModuleConnection",
    items:  Array< {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    parameterSettings?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
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
      module:  {
        __typename: "Module",
        id: string,
        name: string,
        parameters?:  Array< {
          __typename: "TParameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
        } | null > | null,
        menus?:  {
          __typename: "ModelMenuConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      parameterSettings?: string | null,
      url?: string | null,
      createdAt: string,
      updatedAt: string,
      moduleMenusId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
};

export type OnCreateModuleSubscription = {
  onCreateModule?:  {
    __typename: "Module",
    id: string,
    name: string,
    parameters?:  Array< {
      __typename: "TParameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
    } | null > | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        name: string,
        parent?: string | null,
        menuType: MenuType,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        parameterSettings?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
};

export type OnUpdateModuleSubscription = {
  onUpdateModule?:  {
    __typename: "Module",
    id: string,
    name: string,
    parameters?:  Array< {
      __typename: "TParameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
    } | null > | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        name: string,
        parent?: string | null,
        menuType: MenuType,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        parameterSettings?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteModuleSubscriptionVariables = {
  filter?: ModelSubscriptionModuleFilterInput | null,
};

export type OnDeleteModuleSubscription = {
  onDeleteModule?:  {
    __typename: "Module",
    id: string,
    name: string,
    parameters?:  Array< {
      __typename: "TParameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
    } | null > | null,
    menus?:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        name: string,
        parent?: string | null,
        menuType: MenuType,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          createdAt: string,
          updatedAt: string,
        },
        parameterSettings?: string | null,
        url?: string | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    parameterSettings?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
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
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    parameterSettings?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
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
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  Array< {
        __typename: "TParameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
      } | null > | null,
      menus?:  {
        __typename: "ModelMenuConnection",
        items:  Array< {
          __typename: "Menu",
          id: string,
          name: string,
          parent?: string | null,
          menuType: MenuType,
          parameterSettings?: string | null,
          url?: string | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    parameterSettings?: string | null,
    url?: string | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
  } | null,
};
