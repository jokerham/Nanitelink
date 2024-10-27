/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateParameterInput = {
  id?: string | null,
  inputType: InputType,
  label: string,
  defaultValue?: string | null,
  optionValues?: Array< TOptionValueInput | null > | null,
  moduleParametersId?: string | null,
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

export type ModelParameterConditionInput = {
  inputType?: ModelInputTypeInput | null,
  label?: ModelStringInput | null,
  defaultValue?: ModelStringInput | null,
  and?: Array< ModelParameterConditionInput | null > | null,
  or?: Array< ModelParameterConditionInput | null > | null,
  not?: ModelParameterConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  moduleParametersId?: ModelIDInput | null,
};

export type ModelInputTypeInput = {
  eq?: InputType | null,
  ne?: InputType | null,
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

export type Parameter = {
  __typename: "Parameter",
  id: string,
  inputType: InputType,
  label: string,
  defaultValue?: string | null,
  optionValues?:  Array<TOptionValue | null > | null,
  module: Module,
  createdAt: string,
  updatedAt: string,
  moduleParametersId?: string | null,
};

export type TOptionValue = {
  __typename: "TOptionValue",
  value?: string | null,
  label?: string | null,
};

export type Module = {
  __typename: "Module",
  id: string,
  name: string,
  parameters?: ModelParameterConnection | null,
  menus?: ModelMenuConnection | null,
  actions?: ModelActionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelParameterConnection = {
  __typename: "ModelParameterConnection",
  items:  Array<Parameter | null >,
  nextToken?: string | null,
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
  moduleId: string,
  parameterSettings?:  Array<TParameterValue | null > | null,
  url: string,
  sortOrder?: number | null,
  createdAt: string,
  updatedAt: string,
  moduleMenusId?: string | null,
};

export enum MenuType {
  Internal = "Internal",
  External = "External",
}


export type TParameterValue = {
  __typename: "TParameterValue",
  id: string,
  value?: string | null,
};

export type ModelActionConnection = {
  __typename: "ModelActionConnection",
  items:  Array<Action | null >,
  nextToken?: string | null,
};

export type Action = {
  __typename: "Action",
  id: string,
  name: string,
  isIndex: boolean,
  module: Module,
  createdAt: string,
  updatedAt: string,
  moduleActionsId: string,
};

export type UpdateParameterInput = {
  id: string,
  inputType?: InputType | null,
  label?: string | null,
  defaultValue?: string | null,
  optionValues?: Array< TOptionValueInput | null > | null,
  moduleParametersId?: string | null,
};

export type DeleteParameterInput = {
  id: string,
};

export type CreateActionInput = {
  id?: string | null,
  name: string,
  isIndex: boolean,
  moduleActionsId: string,
};

export type ModelActionConditionInput = {
  name?: ModelStringInput | null,
  isIndex?: ModelBooleanInput | null,
  and?: Array< ModelActionConditionInput | null > | null,
  or?: Array< ModelActionConditionInput | null > | null,
  not?: ModelActionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  moduleActionsId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateActionInput = {
  id: string,
  name?: string | null,
  isIndex?: boolean | null,
  moduleActionsId?: string | null,
};

export type DeleteActionInput = {
  id: string,
};

export type CreateModuleInput = {
  id?: string | null,
  name: string,
};

export type ModelModuleConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelModuleConditionInput | null > | null,
  or?: Array< ModelModuleConditionInput | null > | null,
  not?: ModelModuleConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateModuleInput = {
  id: string,
  name?: string | null,
};

export type DeleteModuleInput = {
  id: string,
};

export type CreateMenuInput = {
  id?: string | null,
  name: string,
  parent?: string | null,
  menuType: MenuType,
  moduleId: string,
  parameterSettings?: Array< TParameterValueInput | null > | null,
  url: string,
  sortOrder?: number | null,
  moduleMenusId?: string | null,
};

export type TParameterValueInput = {
  id: string,
  value?: string | null,
};

export type ModelMenuConditionInput = {
  name?: ModelStringInput | null,
  parent?: ModelStringInput | null,
  menuType?: ModelMenuTypeInput | null,
  moduleId?: ModelStringInput | null,
  url?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMenuInput = {
  id: string,
  name?: string | null,
  parent?: string | null,
  menuType?: MenuType | null,
  moduleId?: string | null,
  parameterSettings?: Array< TParameterValueInput | null > | null,
  url?: string | null,
  sortOrder?: number | null,
  moduleMenusId?: string | null,
};

export type DeleteMenuInput = {
  id: string,
};

export type CreateDocumentInput = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  author?: string | null,
};

export type ModelDocumentConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelDocumentConditionInput | null > | null,
  or?: Array< ModelDocumentConditionInput | null > | null,
  not?: ModelDocumentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Document = {
  __typename: "Document",
  id: string,
  title?: string | null,
  content?: string | null,
  author?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateDocumentInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  author?: string | null,
};

export type DeleteDocumentInput = {
  id: string,
};

export type ModelParameterFilterInput = {
  id?: ModelIDInput | null,
  inputType?: ModelInputTypeInput | null,
  label?: ModelStringInput | null,
  defaultValue?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelParameterFilterInput | null > | null,
  or?: Array< ModelParameterFilterInput | null > | null,
  not?: ModelParameterFilterInput | null,
  moduleParametersId?: ModelIDInput | null,
};

export type ModelActionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  isIndex?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelActionFilterInput | null > | null,
  or?: Array< ModelActionFilterInput | null > | null,
  not?: ModelActionFilterInput | null,
  moduleActionsId?: ModelIDInput | null,
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
  moduleId?: ModelStringInput | null,
  url?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
  moduleMenusId?: ModelIDInput | null,
};

export type ModelDocumentFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDocumentFilterInput | null > | null,
  or?: Array< ModelDocumentFilterInput | null > | null,
  not?: ModelDocumentFilterInput | null,
};

export type ModelDocumentConnection = {
  __typename: "ModelDocumentConnection",
  items:  Array<Document | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionParameterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  inputType?: ModelSubscriptionStringInput | null,
  label?: ModelSubscriptionStringInput | null,
  defaultValue?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionParameterFilterInput | null > | null,
  or?: Array< ModelSubscriptionParameterFilterInput | null > | null,
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

export type ModelSubscriptionActionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  isIndex?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActionFilterInput | null > | null,
  or?: Array< ModelSubscriptionActionFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionModuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  moduleParametersId?: ModelSubscriptionIDInput | null,
  moduleMenusId?: ModelSubscriptionIDInput | null,
  moduleActionsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  parent?: ModelSubscriptionStringInput | null,
  menuType?: ModelSubscriptionStringInput | null,
  moduleId?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  sortOrder?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionDocumentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDocumentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDocumentFilterInput | null > | null,
  author?: ModelStringInput | null,
};

export type CreateParameterMutationVariables = {
  input: CreateParameterInput,
  condition?: ModelParameterConditionInput | null,
};

export type CreateParameterMutation = {
  createParameter?:  {
    __typename: "Parameter",
    id: string,
    inputType: InputType,
    label: string,
    defaultValue?: string | null,
    optionValues?:  Array< {
      __typename: "TOptionValue",
      value?: string | null,
      label?: string | null,
    } | null > | null,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
  } | null,
};

export type UpdateParameterMutationVariables = {
  input: UpdateParameterInput,
  condition?: ModelParameterConditionInput | null,
};

export type UpdateParameterMutation = {
  updateParameter?:  {
    __typename: "Parameter",
    id: string,
    inputType: InputType,
    label: string,
    defaultValue?: string | null,
    optionValues?:  Array< {
      __typename: "TOptionValue",
      value?: string | null,
      label?: string | null,
    } | null > | null,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
  } | null,
};

export type DeleteParameterMutationVariables = {
  input: DeleteParameterInput,
  condition?: ModelParameterConditionInput | null,
};

export type DeleteParameterMutation = {
  deleteParameter?:  {
    __typename: "Parameter",
    id: string,
    inputType: InputType,
    label: string,
    defaultValue?: string | null,
    optionValues?:  Array< {
      __typename: "TOptionValue",
      value?: string | null,
      label?: string | null,
    } | null > | null,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
  } | null,
};

export type CreateActionMutationVariables = {
  input: CreateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type CreateActionMutation = {
  createAction?:  {
    __typename: "Action",
    id: string,
    name: string,
    isIndex: boolean,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleActionsId: string,
  } | null,
};

export type UpdateActionMutationVariables = {
  input: UpdateActionInput,
  condition?: ModelActionConditionInput | null,
};

export type UpdateActionMutation = {
  updateAction?:  {
    __typename: "Action",
    id: string,
    name: string,
    isIndex: boolean,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleActionsId: string,
  } | null,
};

export type DeleteActionMutationVariables = {
  input: DeleteActionInput,
  condition?: ModelActionConditionInput | null,
};

export type DeleteActionMutation = {
  deleteAction?:  {
    __typename: "Action",
    id: string,
    name: string,
    isIndex: boolean,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleActionsId: string,
  } | null,
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
    parameters?:  {
      __typename: "ModelParameterConnection",
      items:  Array< {
        __typename: "Parameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        moduleId: string,
        parameterSettings?:  Array< {
          __typename: "TParameterValue",
          id: string,
          value?: string | null,
        } | null > | null,
        url: string,
        sortOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        name: string,
        isIndex: boolean,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleActionsId: string,
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
    parameters?:  {
      __typename: "ModelParameterConnection",
      items:  Array< {
        __typename: "Parameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        moduleId: string,
        parameterSettings?:  Array< {
          __typename: "TParameterValue",
          id: string,
          value?: string | null,
        } | null > | null,
        url: string,
        sortOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        name: string,
        isIndex: boolean,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleActionsId: string,
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
    parameters?:  {
      __typename: "ModelParameterConnection",
      items:  Array< {
        __typename: "Parameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        moduleId: string,
        parameterSettings?:  Array< {
          __typename: "TParameterValue",
          id: string,
          value?: string | null,
        } | null > | null,
        url: string,
        sortOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        name: string,
        isIndex: boolean,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleActionsId: string,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    moduleId: string,
    parameterSettings?:  Array< {
      __typename: "TParameterValue",
      id: string,
      value?: string | null,
    } | null > | null,
    url: string,
    sortOrder?: number | null,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    moduleId: string,
    parameterSettings?:  Array< {
      __typename: "TParameterValue",
      id: string,
      value?: string | null,
    } | null > | null,
    url: string,
    sortOrder?: number | null,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    moduleId: string,
    parameterSettings?:  Array< {
      __typename: "TParameterValue",
      id: string,
      value?: string | null,
    } | null > | null,
    url: string,
    sortOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
  } | null,
};

export type CreateDocumentMutationVariables = {
  input: CreateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type CreateDocumentMutation = {
  createDocument?:  {
    __typename: "Document",
    id: string,
    title?: string | null,
    content?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDocumentMutationVariables = {
  input: UpdateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type UpdateDocumentMutation = {
  updateDocument?:  {
    __typename: "Document",
    id: string,
    title?: string | null,
    content?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDocumentMutationVariables = {
  input: DeleteDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type DeleteDocumentMutation = {
  deleteDocument?:  {
    __typename: "Document",
    id: string,
    title?: string | null,
    content?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetParameterQueryVariables = {
  id: string,
};

export type GetParameterQuery = {
  getParameter?:  {
    __typename: "Parameter",
    id: string,
    inputType: InputType,
    label: string,
    defaultValue?: string | null,
    optionValues?:  Array< {
      __typename: "TOptionValue",
      value?: string | null,
      label?: string | null,
    } | null > | null,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
  } | null,
};

export type ListParametersQueryVariables = {
  filter?: ModelParameterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParametersQuery = {
  listParameters?:  {
    __typename: "ModelParameterConnection",
    items:  Array< {
      __typename: "Parameter",
      id: string,
      inputType: InputType,
      label: string,
      defaultValue?: string | null,
      optionValues?:  Array< {
        __typename: "TOptionValue",
        value?: string | null,
        label?: string | null,
      } | null > | null,
      module:  {
        __typename: "Module",
        id: string,
        name: string,
        parameters?:  {
          __typename: "ModelParameterConnection",
          items:  Array< {
            __typename: "Parameter",
            id: string,
            inputType: InputType,
            label: string,
            defaultValue?: string | null,
            createdAt: string,
            updatedAt: string,
            moduleParametersId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        menus?:  {
          __typename: "ModelMenuConnection",
          items:  Array< {
            __typename: "Menu",
            id: string,
            name: string,
            parent?: string | null,
            menuType: MenuType,
            moduleId: string,
            url: string,
            sortOrder?: number | null,
            createdAt: string,
            updatedAt: string,
            moduleMenusId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        actions?:  {
          __typename: "ModelActionConnection",
          items:  Array< {
            __typename: "Action",
            id: string,
            name: string,
            isIndex: boolean,
            createdAt: string,
            updatedAt: string,
            moduleActionsId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      moduleParametersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActionQueryVariables = {
  id: string,
};

export type GetActionQuery = {
  getAction?:  {
    __typename: "Action",
    id: string,
    name: string,
    isIndex: boolean,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleActionsId: string,
  } | null,
};

export type ListActionsQueryVariables = {
  filter?: ModelActionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActionsQuery = {
  listActions?:  {
    __typename: "ModelActionConnection",
    items:  Array< {
      __typename: "Action",
      id: string,
      name: string,
      isIndex: boolean,
      module:  {
        __typename: "Module",
        id: string,
        name: string,
        parameters?:  {
          __typename: "ModelParameterConnection",
          items:  Array< {
            __typename: "Parameter",
            id: string,
            inputType: InputType,
            label: string,
            defaultValue?: string | null,
            createdAt: string,
            updatedAt: string,
            moduleParametersId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        menus?:  {
          __typename: "ModelMenuConnection",
          items:  Array< {
            __typename: "Menu",
            id: string,
            name: string,
            parent?: string | null,
            menuType: MenuType,
            moduleId: string,
            url: string,
            sortOrder?: number | null,
            createdAt: string,
            updatedAt: string,
            moduleMenusId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        actions?:  {
          __typename: "ModelActionConnection",
          items:  Array< {
            __typename: "Action",
            id: string,
            name: string,
            isIndex: boolean,
            createdAt: string,
            updatedAt: string,
            moduleActionsId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      moduleActionsId: string,
    } | null >,
    nextToken?: string | null,
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
    parameters?:  {
      __typename: "ModelParameterConnection",
      items:  Array< {
        __typename: "Parameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        moduleId: string,
        parameterSettings?:  Array< {
          __typename: "TParameterValue",
          id: string,
          value?: string | null,
        } | null > | null,
        url: string,
        sortOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        name: string,
        isIndex: boolean,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleActionsId: string,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    moduleId: string,
    parameterSettings?:  Array< {
      __typename: "TParameterValue",
      id: string,
      value?: string | null,
    } | null > | null,
    url: string,
    sortOrder?: number | null,
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
        parameters?:  {
          __typename: "ModelParameterConnection",
          items:  Array< {
            __typename: "Parameter",
            id: string,
            inputType: InputType,
            label: string,
            defaultValue?: string | null,
            createdAt: string,
            updatedAt: string,
            moduleParametersId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        menus?:  {
          __typename: "ModelMenuConnection",
          items:  Array< {
            __typename: "Menu",
            id: string,
            name: string,
            parent?: string | null,
            menuType: MenuType,
            moduleId: string,
            url: string,
            sortOrder?: number | null,
            createdAt: string,
            updatedAt: string,
            moduleMenusId?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        actions?:  {
          __typename: "ModelActionConnection",
          items:  Array< {
            __typename: "Action",
            id: string,
            name: string,
            isIndex: boolean,
            createdAt: string,
            updatedAt: string,
            moduleActionsId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      moduleId: string,
      parameterSettings?:  Array< {
        __typename: "TParameterValue",
        id: string,
        value?: string | null,
      } | null > | null,
      url: string,
      sortOrder?: number | null,
      createdAt: string,
      updatedAt: string,
      moduleMenusId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDocumentQueryVariables = {
  id: string,
};

export type GetDocumentQuery = {
  getDocument?:  {
    __typename: "Document",
    id: string,
    title?: string | null,
    content?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDocumentsQuery = {
  listDocuments?:  {
    __typename: "ModelDocumentConnection",
    items:  Array< {
      __typename: "Document",
      id: string,
      title?: string | null,
      content?: string | null,
      author?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateParameterSubscriptionVariables = {
  filter?: ModelSubscriptionParameterFilterInput | null,
};

export type OnCreateParameterSubscription = {
  onCreateParameter?:  {
    __typename: "Parameter",
    id: string,
    inputType: InputType,
    label: string,
    defaultValue?: string | null,
    optionValues?:  Array< {
      __typename: "TOptionValue",
      value?: string | null,
      label?: string | null,
    } | null > | null,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
  } | null,
};

export type OnUpdateParameterSubscriptionVariables = {
  filter?: ModelSubscriptionParameterFilterInput | null,
};

export type OnUpdateParameterSubscription = {
  onUpdateParameter?:  {
    __typename: "Parameter",
    id: string,
    inputType: InputType,
    label: string,
    defaultValue?: string | null,
    optionValues?:  Array< {
      __typename: "TOptionValue",
      value?: string | null,
      label?: string | null,
    } | null > | null,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
  } | null,
};

export type OnDeleteParameterSubscriptionVariables = {
  filter?: ModelSubscriptionParameterFilterInput | null,
};

export type OnDeleteParameterSubscription = {
  onDeleteParameter?:  {
    __typename: "Parameter",
    id: string,
    inputType: InputType,
    label: string,
    defaultValue?: string | null,
    optionValues?:  Array< {
      __typename: "TOptionValue",
      value?: string | null,
      label?: string | null,
    } | null > | null,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
  } | null,
};

export type OnCreateActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnCreateActionSubscription = {
  onCreateAction?:  {
    __typename: "Action",
    id: string,
    name: string,
    isIndex: boolean,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleActionsId: string,
  } | null,
};

export type OnUpdateActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnUpdateActionSubscription = {
  onUpdateAction?:  {
    __typename: "Action",
    id: string,
    name: string,
    isIndex: boolean,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleActionsId: string,
  } | null,
};

export type OnDeleteActionSubscriptionVariables = {
  filter?: ModelSubscriptionActionFilterInput | null,
};

export type OnDeleteActionSubscription = {
  onDeleteAction?:  {
    __typename: "Action",
    id: string,
    name: string,
    isIndex: boolean,
    module:  {
      __typename: "Module",
      id: string,
      name: string,
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleActionsId: string,
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
    parameters?:  {
      __typename: "ModelParameterConnection",
      items:  Array< {
        __typename: "Parameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        moduleId: string,
        parameterSettings?:  Array< {
          __typename: "TParameterValue",
          id: string,
          value?: string | null,
        } | null > | null,
        url: string,
        sortOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        name: string,
        isIndex: boolean,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleActionsId: string,
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
    parameters?:  {
      __typename: "ModelParameterConnection",
      items:  Array< {
        __typename: "Parameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        moduleId: string,
        parameterSettings?:  Array< {
          __typename: "TParameterValue",
          id: string,
          value?: string | null,
        } | null > | null,
        url: string,
        sortOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        name: string,
        isIndex: boolean,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleActionsId: string,
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
    parameters?:  {
      __typename: "ModelParameterConnection",
      items:  Array< {
        __typename: "Parameter",
        id: string,
        inputType: InputType,
        label: string,
        defaultValue?: string | null,
        optionValues?:  Array< {
          __typename: "TOptionValue",
          value?: string | null,
          label?: string | null,
        } | null > | null,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
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
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        moduleId: string,
        parameterSettings?:  Array< {
          __typename: "TParameterValue",
          id: string,
          value?: string | null,
        } | null > | null,
        url: string,
        sortOrder?: number | null,
        createdAt: string,
        updatedAt: string,
        moduleMenusId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    actions?:  {
      __typename: "ModelActionConnection",
      items:  Array< {
        __typename: "Action",
        id: string,
        name: string,
        isIndex: boolean,
        module:  {
          __typename: "Module",
          id: string,
          name: string,
          parameters?:  {
            __typename: "ModelParameterConnection",
            nextToken?: string | null,
          } | null,
          menus?:  {
            __typename: "ModelMenuConnection",
            nextToken?: string | null,
          } | null,
          actions?:  {
            __typename: "ModelActionConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleActionsId: string,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    moduleId: string,
    parameterSettings?:  Array< {
      __typename: "TParameterValue",
      id: string,
      value?: string | null,
    } | null > | null,
    url: string,
    sortOrder?: number | null,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    moduleId: string,
    parameterSettings?:  Array< {
      __typename: "TParameterValue",
      id: string,
      value?: string | null,
    } | null > | null,
    url: string,
    sortOrder?: number | null,
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
      parameters?:  {
        __typename: "ModelParameterConnection",
        items:  Array< {
          __typename: "Parameter",
          id: string,
          inputType: InputType,
          label: string,
          defaultValue?: string | null,
          optionValues?:  Array< {
            __typename: "TOptionValue",
            value?: string | null,
            label?: string | null,
          } | null > | null,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleParametersId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
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
          moduleId: string,
          parameterSettings?:  Array< {
            __typename: "TParameterValue",
            id: string,
            value?: string | null,
          } | null > | null,
          url: string,
          sortOrder?: number | null,
          createdAt: string,
          updatedAt: string,
          moduleMenusId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      actions?:  {
        __typename: "ModelActionConnection",
        items:  Array< {
          __typename: "Action",
          id: string,
          name: string,
          isIndex: boolean,
          module:  {
            __typename: "Module",
            id: string,
            name: string,
            createdAt: string,
            updatedAt: string,
          },
          createdAt: string,
          updatedAt: string,
          moduleActionsId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    moduleId: string,
    parameterSettings?:  Array< {
      __typename: "TParameterValue",
      id: string,
      value?: string | null,
    } | null > | null,
    url: string,
    sortOrder?: number | null,
    createdAt: string,
    updatedAt: string,
    moduleMenusId?: string | null,
  } | null,
};

export type OnCreateDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
};

export type OnCreateDocumentSubscription = {
  onCreateDocument?:  {
    __typename: "Document",
    id: string,
    title?: string | null,
    content?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
};

export type OnUpdateDocumentSubscription = {
  onUpdateDocument?:  {
    __typename: "Document",
    id: string,
    title?: string | null,
    content?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDocumentSubscriptionVariables = {
  filter?: ModelSubscriptionDocumentFilterInput | null,
};

export type OnDeleteDocumentSubscription = {
  onDeleteDocument?:  {
    __typename: "Document",
    id: string,
    title?: string | null,
    content?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
