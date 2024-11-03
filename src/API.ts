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
  createdAt: string,
  updatedAt: string,
};

export type ModelParameterConnection = {
  __typename: "ModelParameterConnection",
  items:  Array<Parameter | null >,
  nextToken?: string | null,
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
  menuModuleId: string,
};

export enum MenuType {
  Internal = "Internal",
  External = "External",
}


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
  menuModuleId?: ModelIDInput | null,
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
  menuModuleId: string,
};

export type TParameterValue = {
  __typename: "TParameterValue",
  id: string,
  value?: string | null,
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
  menuModuleId?: string | null,
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

export type CreateBoardCatgoryInput = {
  id?: string | null,
  name: string,
  sortOrder: number,
  boardCatgoryChildrenId: string,
  boardCategoryId: string,
};

export type ModelBoardCatgoryConditionInput = {
  name?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
  and?: Array< ModelBoardCatgoryConditionInput | null > | null,
  or?: Array< ModelBoardCatgoryConditionInput | null > | null,
  not?: ModelBoardCatgoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  boardCatgoryChildrenId?: ModelIDInput | null,
  boardCategoryId?: ModelIDInput | null,
};

export type BoardCatgory = {
  __typename: "BoardCatgory",
  id: string,
  name: string,
  parent?: BoardCatgory | null,
  children?: ModelBoardCatgoryConnection | null,
  sortOrder: number,
  createdAt: string,
  updatedAt: string,
  boardCatgoryChildrenId: string,
  boardCategoryId: string,
};

export type ModelBoardCatgoryConnection = {
  __typename: "ModelBoardCatgoryConnection",
  items:  Array<BoardCatgory | null >,
  nextToken?: string | null,
};

export type UpdateBoardCatgoryInput = {
  id: string,
  name?: string | null,
  sortOrder?: number | null,
  boardCatgoryChildrenId?: string | null,
  boardCategoryId?: string | null,
};

export type DeleteBoardCatgoryInput = {
  id: string,
};

export type CreateBoardInput = {
  id?: string | null,
  title: string,
  header?: string | null,
  footer?: string | null,
  listViewItems: Array< string | null >,
  listSort: TSortItemInput,
  excludeNoticeFlag: boolean,
  type: BoardType,
};

export type TSortItemInput = {
  item: string,
  sort: SortOrder,
};

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}


export enum BoardType {
  default = "default",
  anonymous = "anonymous",
  consultation = "consultation",
}


export type ModelBoardConditionInput = {
  title?: ModelStringInput | null,
  header?: ModelStringInput | null,
  footer?: ModelStringInput | null,
  listViewItems?: ModelStringInput | null,
  excludeNoticeFlag?: ModelBooleanInput | null,
  type?: ModelBoardTypeInput | null,
  and?: Array< ModelBoardConditionInput | null > | null,
  or?: Array< ModelBoardConditionInput | null > | null,
  not?: ModelBoardConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBoardTypeInput = {
  eq?: BoardType | null,
  ne?: BoardType | null,
};

export type Board = {
  __typename: "Board",
  id: string,
  title: string,
  header?: string | null,
  footer?: string | null,
  listViewItems: Array< string | null >,
  listSort: TSortItem,
  excludeNoticeFlag: boolean,
  type: BoardType,
  category?: ModelBoardCatgoryConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type TSortItem = {
  __typename: "TSortItem",
  item: string,
  sort: SortOrder,
};

export type UpdateBoardInput = {
  id: string,
  title?: string | null,
  header?: string | null,
  footer?: string | null,
  listViewItems?: Array< string | null > | null,
  listSort?: TSortItemInput | null,
  excludeNoticeFlag?: boolean | null,
  type?: BoardType | null,
};

export type DeleteBoardInput = {
  id: string,
};

export type CreateAttachmentInput = {
  id?: string | null,
  filename: string,
  filetype: string,
  path: string,
  boardItemAttachmentsId?: string | null,
};

export type ModelAttachmentConditionInput = {
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelAttachmentConditionInput | null > | null,
  or?: Array< ModelAttachmentConditionInput | null > | null,
  not?: ModelAttachmentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  boardItemAttachmentsId?: ModelIDInput | null,
  author?: ModelStringInput | null,
};

export type Attachment = {
  __typename: "Attachment",
  id: string,
  filename: string,
  filetype: string,
  path: string,
  createdAt: string,
  updatedAt: string,
  boardItemAttachmentsId?: string | null,
  author?: string | null,
};

export type UpdateAttachmentInput = {
  id: string,
  filename?: string | null,
  filetype?: string | null,
  path?: string | null,
  boardItemAttachmentsId?: string | null,
};

export type DeleteAttachmentInput = {
  id: string,
};

export type CreateBoardItemInput = {
  id?: string | null,
  title: string,
  content: string,
  tag: string,
  author: string,
  isNotice?: boolean | null,
  boardItemBoardId: string,
  boardItemCategoryId?: string | null,
};

export type ModelBoardItemConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  tag?: ModelStringInput | null,
  author?: ModelStringInput | null,
  isNotice?: ModelBooleanInput | null,
  and?: Array< ModelBoardItemConditionInput | null > | null,
  or?: Array< ModelBoardItemConditionInput | null > | null,
  not?: ModelBoardItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  boardItemBoardId?: ModelIDInput | null,
  boardItemCategoryId?: ModelIDInput | null,
};

export type BoardItem = {
  __typename: "BoardItem",
  id: string,
  board: Board,
  category?: BoardCatgory | null,
  title: string,
  content: string,
  tag: string,
  author: string,
  attachments?: ModelAttachmentConnection | null,
  isNotice?: boolean | null,
  createdAt: string,
  updatedAt: string,
  boardItemBoardId: string,
  boardItemCategoryId?: string | null,
};

export type ModelAttachmentConnection = {
  __typename: "ModelAttachmentConnection",
  items:  Array<Attachment | null >,
  nextToken?: string | null,
};

export type UpdateBoardItemInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  tag?: string | null,
  author?: string | null,
  isNotice?: boolean | null,
  boardItemBoardId?: string | null,
  boardItemCategoryId?: string | null,
};

export type DeleteBoardItemInput = {
  id: string,
};

export type CreateBoardItemCommentInput = {
  id?: string | null,
  comment: string,
  author: string,
  boardItemCommentBoardItemId: string,
};

export type ModelBoardItemCommentConditionInput = {
  comment?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelBoardItemCommentConditionInput | null > | null,
  or?: Array< ModelBoardItemCommentConditionInput | null > | null,
  not?: ModelBoardItemCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  boardItemCommentBoardItemId?: ModelIDInput | null,
};

export type BoardItemComment = {
  __typename: "BoardItemComment",
  id: string,
  boardItem: BoardItem,
  comment: string,
  author: string,
  createdAt: string,
  updatedAt: string,
  boardItemCommentBoardItemId: string,
};

export type UpdateBoardItemCommentInput = {
  id: string,
  comment?: string | null,
  author?: string | null,
  boardItemCommentBoardItemId?: string | null,
};

export type DeleteBoardItemCommentInput = {
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
  menuModuleId?: ModelIDInput | null,
};

export type ModelMenuConnection = {
  __typename: "ModelMenuConnection",
  items:  Array<Menu | null >,
  nextToken?: string | null,
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

export type ModelBoardCatgoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardCatgoryFilterInput | null > | null,
  or?: Array< ModelBoardCatgoryFilterInput | null > | null,
  not?: ModelBoardCatgoryFilterInput | null,
  boardCatgoryChildrenId?: ModelIDInput | null,
  boardCategoryId?: ModelIDInput | null,
};

export type ModelBoardFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  header?: ModelStringInput | null,
  footer?: ModelStringInput | null,
  listViewItems?: ModelStringInput | null,
  excludeNoticeFlag?: ModelBooleanInput | null,
  type?: ModelBoardTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardFilterInput | null > | null,
  or?: Array< ModelBoardFilterInput | null > | null,
  not?: ModelBoardFilterInput | null,
};

export type ModelBoardConnection = {
  __typename: "ModelBoardConnection",
  items:  Array<Board | null >,
  nextToken?: string | null,
};

export type ModelAttachmentFilterInput = {
  id?: ModelIDInput | null,
  filename?: ModelStringInput | null,
  filetype?: ModelStringInput | null,
  path?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAttachmentFilterInput | null > | null,
  or?: Array< ModelAttachmentFilterInput | null > | null,
  not?: ModelAttachmentFilterInput | null,
  boardItemAttachmentsId?: ModelIDInput | null,
  author?: ModelStringInput | null,
};

export type ModelBoardItemFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  tag?: ModelStringInput | null,
  author?: ModelStringInput | null,
  isNotice?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardItemFilterInput | null > | null,
  or?: Array< ModelBoardItemFilterInput | null > | null,
  not?: ModelBoardItemFilterInput | null,
  boardItemBoardId?: ModelIDInput | null,
  boardItemCategoryId?: ModelIDInput | null,
};

export type ModelBoardItemConnection = {
  __typename: "ModelBoardItemConnection",
  items:  Array<BoardItem | null >,
  nextToken?: string | null,
};

export type ModelBoardItemCommentFilterInput = {
  id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  author?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBoardItemCommentFilterInput | null > | null,
  or?: Array< ModelBoardItemCommentFilterInput | null > | null,
  not?: ModelBoardItemCommentFilterInput | null,
  boardItemCommentBoardItemId?: ModelIDInput | null,
};

export type ModelBoardItemCommentConnection = {
  __typename: "ModelBoardItemCommentConnection",
  items:  Array<BoardItemComment | null >,
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

export type ModelSubscriptionModuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionModuleFilterInput | null > | null,
  moduleParametersId?: ModelSubscriptionIDInput | null,
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
  menuModuleId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionBoardCatgoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  sortOrder?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBoardCatgoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardCatgoryFilterInput | null > | null,
  boardCatgoryChildrenId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBoardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  header?: ModelSubscriptionStringInput | null,
  footer?: ModelSubscriptionStringInput | null,
  listViewItems?: ModelSubscriptionStringInput | null,
  excludeNoticeFlag?: ModelSubscriptionBooleanInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBoardFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardFilterInput | null > | null,
  boardCategoryId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionAttachmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  filename?: ModelSubscriptionStringInput | null,
  filetype?: ModelSubscriptionStringInput | null,
  path?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
  author?: ModelStringInput | null,
};

export type ModelSubscriptionBoardItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  tag?: ModelSubscriptionStringInput | null,
  isNotice?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBoardItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardItemFilterInput | null > | null,
  boardItemAttachmentsId?: ModelSubscriptionIDInput | null,
  boardItemBoardId?: ModelSubscriptionIDInput | null,
  boardItemCategoryId?: ModelSubscriptionIDInput | null,
  author?: ModelStringInput | null,
};

export type ModelSubscriptionBoardItemCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  comment?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBoardItemCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionBoardItemCommentFilterInput | null > | null,
  boardItemCommentBoardItemId?: ModelSubscriptionIDInput | null,
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
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
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
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
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
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
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
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
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
    menuModuleId: string,
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
    menuModuleId: string,
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
    menuModuleId: string,
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

export type CreateBoardCatgoryMutationVariables = {
  input: CreateBoardCatgoryInput,
  condition?: ModelBoardCatgoryConditionInput | null,
};

export type CreateBoardCatgoryMutation = {
  createBoardCatgory?:  {
    __typename: "BoardCatgory",
    id: string,
    name: string,
    parent?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    children?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    boardCatgoryChildrenId: string,
    boardCategoryId: string,
  } | null,
};

export type UpdateBoardCatgoryMutationVariables = {
  input: UpdateBoardCatgoryInput,
  condition?: ModelBoardCatgoryConditionInput | null,
};

export type UpdateBoardCatgoryMutation = {
  updateBoardCatgory?:  {
    __typename: "BoardCatgory",
    id: string,
    name: string,
    parent?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    children?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    boardCatgoryChildrenId: string,
    boardCategoryId: string,
  } | null,
};

export type DeleteBoardCatgoryMutationVariables = {
  input: DeleteBoardCatgoryInput,
  condition?: ModelBoardCatgoryConditionInput | null,
};

export type DeleteBoardCatgoryMutation = {
  deleteBoardCatgory?:  {
    __typename: "BoardCatgory",
    id: string,
    name: string,
    parent?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    children?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    boardCatgoryChildrenId: string,
    boardCategoryId: string,
  } | null,
};

export type CreateBoardMutationVariables = {
  input: CreateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type CreateBoardMutation = {
  createBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    header?: string | null,
    footer?: string | null,
    listViewItems: Array< string | null >,
    listSort:  {
      __typename: "TSortItem",
      item: string,
      sort: SortOrder,
    },
    excludeNoticeFlag: boolean,
    type: BoardType,
    category?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBoardMutationVariables = {
  input: UpdateBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type UpdateBoardMutation = {
  updateBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    header?: string | null,
    footer?: string | null,
    listViewItems: Array< string | null >,
    listSort:  {
      __typename: "TSortItem",
      item: string,
      sort: SortOrder,
    },
    excludeNoticeFlag: boolean,
    type: BoardType,
    category?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBoardMutationVariables = {
  input: DeleteBoardInput,
  condition?: ModelBoardConditionInput | null,
};

export type DeleteBoardMutation = {
  deleteBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    header?: string | null,
    footer?: string | null,
    listViewItems: Array< string | null >,
    listSort:  {
      __typename: "TSortItem",
      item: string,
      sort: SortOrder,
    },
    excludeNoticeFlag: boolean,
    type: BoardType,
    category?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttachmentMutationVariables = {
  input: CreateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type CreateAttachmentMutation = {
  createAttachment?:  {
    __typename: "Attachment",
    id: string,
    filename: string,
    filetype: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    boardItemAttachmentsId?: string | null,
    author?: string | null,
  } | null,
};

export type UpdateAttachmentMutationVariables = {
  input: UpdateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type UpdateAttachmentMutation = {
  updateAttachment?:  {
    __typename: "Attachment",
    id: string,
    filename: string,
    filetype: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    boardItemAttachmentsId?: string | null,
    author?: string | null,
  } | null,
};

export type DeleteAttachmentMutationVariables = {
  input: DeleteAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type DeleteAttachmentMutation = {
  deleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    filename: string,
    filetype: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    boardItemAttachmentsId?: string | null,
    author?: string | null,
  } | null,
};

export type CreateBoardItemMutationVariables = {
  input: CreateBoardItemInput,
  condition?: ModelBoardItemConditionInput | null,
};

export type CreateBoardItemMutation = {
  createBoardItem?:  {
    __typename: "BoardItem",
    id: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    title: string,
    content: string,
    tag: string,
    author: string,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        filename: string,
        filetype: string,
        path: string,
        createdAt: string,
        updatedAt: string,
        boardItemAttachmentsId?: string | null,
        author?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isNotice?: boolean | null,
    createdAt: string,
    updatedAt: string,
    boardItemBoardId: string,
    boardItemCategoryId?: string | null,
  } | null,
};

export type UpdateBoardItemMutationVariables = {
  input: UpdateBoardItemInput,
  condition?: ModelBoardItemConditionInput | null,
};

export type UpdateBoardItemMutation = {
  updateBoardItem?:  {
    __typename: "BoardItem",
    id: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    title: string,
    content: string,
    tag: string,
    author: string,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        filename: string,
        filetype: string,
        path: string,
        createdAt: string,
        updatedAt: string,
        boardItemAttachmentsId?: string | null,
        author?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isNotice?: boolean | null,
    createdAt: string,
    updatedAt: string,
    boardItemBoardId: string,
    boardItemCategoryId?: string | null,
  } | null,
};

export type DeleteBoardItemMutationVariables = {
  input: DeleteBoardItemInput,
  condition?: ModelBoardItemConditionInput | null,
};

export type DeleteBoardItemMutation = {
  deleteBoardItem?:  {
    __typename: "BoardItem",
    id: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    title: string,
    content: string,
    tag: string,
    author: string,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        filename: string,
        filetype: string,
        path: string,
        createdAt: string,
        updatedAt: string,
        boardItemAttachmentsId?: string | null,
        author?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isNotice?: boolean | null,
    createdAt: string,
    updatedAt: string,
    boardItemBoardId: string,
    boardItemCategoryId?: string | null,
  } | null,
};

export type CreateBoardItemCommentMutationVariables = {
  input: CreateBoardItemCommentInput,
  condition?: ModelBoardItemCommentConditionInput | null,
};

export type CreateBoardItemCommentMutation = {
  createBoardItemComment?:  {
    __typename: "BoardItemComment",
    id: string,
    boardItem:  {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    },
    comment: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    boardItemCommentBoardItemId: string,
  } | null,
};

export type UpdateBoardItemCommentMutationVariables = {
  input: UpdateBoardItemCommentInput,
  condition?: ModelBoardItemCommentConditionInput | null,
};

export type UpdateBoardItemCommentMutation = {
  updateBoardItemComment?:  {
    __typename: "BoardItemComment",
    id: string,
    boardItem:  {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    },
    comment: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    boardItemCommentBoardItemId: string,
  } | null,
};

export type DeleteBoardItemCommentMutationVariables = {
  input: DeleteBoardItemCommentInput,
  condition?: ModelBoardItemCommentConditionInput | null,
};

export type DeleteBoardItemCommentMutation = {
  deleteBoardItemComment?:  {
    __typename: "BoardItemComment",
    id: string,
    boardItem:  {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    },
    comment: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    boardItemCommentBoardItemId: string,
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
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
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
    menuModuleId: string,
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
      menuModuleId: string,
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

export type GetBoardCatgoryQueryVariables = {
  id: string,
};

export type GetBoardCatgoryQuery = {
  getBoardCatgory?:  {
    __typename: "BoardCatgory",
    id: string,
    name: string,
    parent?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    children?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    boardCatgoryChildrenId: string,
    boardCategoryId: string,
  } | null,
};

export type ListBoardCatgoriesQueryVariables = {
  filter?: ModelBoardCatgoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardCatgoriesQuery = {
  listBoardCatgories?:  {
    __typename: "ModelBoardCatgoryConnection",
    items:  Array< {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBoardQueryVariables = {
  id: string,
};

export type GetBoardQuery = {
  getBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    header?: string | null,
    footer?: string | null,
    listViewItems: Array< string | null >,
    listSort:  {
      __typename: "TSortItem",
      item: string,
      sort: SortOrder,
    },
    excludeNoticeFlag: boolean,
    type: BoardType,
    category?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBoardsQueryVariables = {
  filter?: ModelBoardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardsQuery = {
  listBoards?:  {
    __typename: "ModelBoardConnection",
    items:  Array< {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttachmentQueryVariables = {
  id: string,
};

export type GetAttachmentQuery = {
  getAttachment?:  {
    __typename: "Attachment",
    id: string,
    filename: string,
    filetype: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    boardItemAttachmentsId?: string | null,
    author?: string | null,
  } | null,
};

export type ListAttachmentsQueryVariables = {
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttachmentsQuery = {
  listAttachments?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      filename: string,
      filetype: string,
      path: string,
      createdAt: string,
      updatedAt: string,
      boardItemAttachmentsId?: string | null,
      author?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBoardItemQueryVariables = {
  id: string,
};

export type GetBoardItemQuery = {
  getBoardItem?:  {
    __typename: "BoardItem",
    id: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    title: string,
    content: string,
    tag: string,
    author: string,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        filename: string,
        filetype: string,
        path: string,
        createdAt: string,
        updatedAt: string,
        boardItemAttachmentsId?: string | null,
        author?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isNotice?: boolean | null,
    createdAt: string,
    updatedAt: string,
    boardItemBoardId: string,
    boardItemCategoryId?: string | null,
  } | null,
};

export type ListBoardItemsQueryVariables = {
  filter?: ModelBoardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardItemsQuery = {
  listBoardItems?:  {
    __typename: "ModelBoardItemConnection",
    items:  Array< {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBoardItemCommentQueryVariables = {
  id: string,
};

export type GetBoardItemCommentQuery = {
  getBoardItemComment?:  {
    __typename: "BoardItemComment",
    id: string,
    boardItem:  {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    },
    comment: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    boardItemCommentBoardItemId: string,
  } | null,
};

export type ListBoardItemCommentsQueryVariables = {
  filter?: ModelBoardItemCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBoardItemCommentsQuery = {
  listBoardItemComments?:  {
    __typename: "ModelBoardItemCommentConnection",
    items:  Array< {
      __typename: "BoardItemComment",
      id: string,
      boardItem:  {
        __typename: "BoardItem",
        id: string,
        board:  {
          __typename: "Board",
          id: string,
          title: string,
          header?: string | null,
          footer?: string | null,
          listViewItems: Array< string | null >,
          listSort:  {
            __typename: "TSortItem",
            item: string,
            sort: SortOrder,
          },
          excludeNoticeFlag: boolean,
          type: BoardType,
          category?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          createdAt: string,
          updatedAt: string,
        },
        category?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        title: string,
        content: string,
        tag: string,
        author: string,
        attachments?:  {
          __typename: "ModelAttachmentConnection",
          items:  Array< {
            __typename: "Attachment",
            id: string,
            filename: string,
            filetype: string,
            path: string,
            createdAt: string,
            updatedAt: string,
            boardItemAttachmentsId?: string | null,
            author?: string | null,
          } | null >,
          nextToken?: string | null,
        } | null,
        isNotice?: boolean | null,
        createdAt: string,
        updatedAt: string,
        boardItemBoardId: string,
        boardItemCategoryId?: string | null,
      },
      comment: string,
      author: string,
      createdAt: string,
      updatedAt: string,
      boardItemCommentBoardItemId: string,
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
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    moduleParametersId?: string | null,
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
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
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
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
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
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
        moduleParametersId?: string | null,
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
    menuModuleId: string,
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
    menuModuleId: string,
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
    menuModuleId: string,
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

export type OnCreateBoardCatgorySubscriptionVariables = {
  filter?: ModelSubscriptionBoardCatgoryFilterInput | null,
};

export type OnCreateBoardCatgorySubscription = {
  onCreateBoardCatgory?:  {
    __typename: "BoardCatgory",
    id: string,
    name: string,
    parent?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    children?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    boardCatgoryChildrenId: string,
    boardCategoryId: string,
  } | null,
};

export type OnUpdateBoardCatgorySubscriptionVariables = {
  filter?: ModelSubscriptionBoardCatgoryFilterInput | null,
};

export type OnUpdateBoardCatgorySubscription = {
  onUpdateBoardCatgory?:  {
    __typename: "BoardCatgory",
    id: string,
    name: string,
    parent?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    children?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    boardCatgoryChildrenId: string,
    boardCategoryId: string,
  } | null,
};

export type OnDeleteBoardCatgorySubscriptionVariables = {
  filter?: ModelSubscriptionBoardCatgoryFilterInput | null,
};

export type OnDeleteBoardCatgorySubscription = {
  onDeleteBoardCatgory?:  {
    __typename: "BoardCatgory",
    id: string,
    name: string,
    parent?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    children?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    sortOrder: number,
    createdAt: string,
    updatedAt: string,
    boardCatgoryChildrenId: string,
    boardCategoryId: string,
  } | null,
};

export type OnCreateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnCreateBoardSubscription = {
  onCreateBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    header?: string | null,
    footer?: string | null,
    listViewItems: Array< string | null >,
    listSort:  {
      __typename: "TSortItem",
      item: string,
      sort: SortOrder,
    },
    excludeNoticeFlag: boolean,
    type: BoardType,
    category?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnUpdateBoardSubscription = {
  onUpdateBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    header?: string | null,
    footer?: string | null,
    listViewItems: Array< string | null >,
    listSort:  {
      __typename: "TSortItem",
      item: string,
      sort: SortOrder,
    },
    excludeNoticeFlag: boolean,
    type: BoardType,
    category?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBoardSubscriptionVariables = {
  filter?: ModelSubscriptionBoardFilterInput | null,
};

export type OnDeleteBoardSubscription = {
  onDeleteBoard?:  {
    __typename: "Board",
    id: string,
    title: string,
    header?: string | null,
    footer?: string | null,
    listViewItems: Array< string | null >,
    listSort:  {
      __typename: "TSortItem",
      item: string,
      sort: SortOrder,
    },
    excludeNoticeFlag: boolean,
    type: BoardType,
    category?:  {
      __typename: "ModelBoardCatgoryConnection",
      items:  Array< {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnCreateAttachmentSubscription = {
  onCreateAttachment?:  {
    __typename: "Attachment",
    id: string,
    filename: string,
    filetype: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    boardItemAttachmentsId?: string | null,
    author?: string | null,
  } | null,
};

export type OnUpdateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnUpdateAttachmentSubscription = {
  onUpdateAttachment?:  {
    __typename: "Attachment",
    id: string,
    filename: string,
    filetype: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    boardItemAttachmentsId?: string | null,
    author?: string | null,
  } | null,
};

export type OnDeleteAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnDeleteAttachmentSubscription = {
  onDeleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    filename: string,
    filetype: string,
    path: string,
    createdAt: string,
    updatedAt: string,
    boardItemAttachmentsId?: string | null,
    author?: string | null,
  } | null,
};

export type OnCreateBoardItemSubscriptionVariables = {
  filter?: ModelSubscriptionBoardItemFilterInput | null,
};

export type OnCreateBoardItemSubscription = {
  onCreateBoardItem?:  {
    __typename: "BoardItem",
    id: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    title: string,
    content: string,
    tag: string,
    author: string,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        filename: string,
        filetype: string,
        path: string,
        createdAt: string,
        updatedAt: string,
        boardItemAttachmentsId?: string | null,
        author?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isNotice?: boolean | null,
    createdAt: string,
    updatedAt: string,
    boardItemBoardId: string,
    boardItemCategoryId?: string | null,
  } | null,
};

export type OnUpdateBoardItemSubscriptionVariables = {
  filter?: ModelSubscriptionBoardItemFilterInput | null,
};

export type OnUpdateBoardItemSubscription = {
  onUpdateBoardItem?:  {
    __typename: "BoardItem",
    id: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    title: string,
    content: string,
    tag: string,
    author: string,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        filename: string,
        filetype: string,
        path: string,
        createdAt: string,
        updatedAt: string,
        boardItemAttachmentsId?: string | null,
        author?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isNotice?: boolean | null,
    createdAt: string,
    updatedAt: string,
    boardItemBoardId: string,
    boardItemCategoryId?: string | null,
  } | null,
};

export type OnDeleteBoardItemSubscriptionVariables = {
  filter?: ModelSubscriptionBoardItemFilterInput | null,
};

export type OnDeleteBoardItemSubscription = {
  onDeleteBoardItem?:  {
    __typename: "BoardItem",
    id: string,
    board:  {
      __typename: "Board",
      id: string,
      title: string,
      header?: string | null,
      footer?: string | null,
      listViewItems: Array< string | null >,
      listSort:  {
        __typename: "TSortItem",
        item: string,
        sort: SortOrder,
      },
      excludeNoticeFlag: boolean,
      type: BoardType,
      category?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    category?:  {
      __typename: "BoardCatgory",
      id: string,
      name: string,
      parent?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      children?:  {
        __typename: "ModelBoardCatgoryConnection",
        items:  Array< {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      sortOrder: number,
      createdAt: string,
      updatedAt: string,
      boardCatgoryChildrenId: string,
      boardCategoryId: string,
    } | null,
    title: string,
    content: string,
    tag: string,
    author: string,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        filename: string,
        filetype: string,
        path: string,
        createdAt: string,
        updatedAt: string,
        boardItemAttachmentsId?: string | null,
        author?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isNotice?: boolean | null,
    createdAt: string,
    updatedAt: string,
    boardItemBoardId: string,
    boardItemCategoryId?: string | null,
  } | null,
};

export type OnCreateBoardItemCommentSubscriptionVariables = {
  filter?: ModelSubscriptionBoardItemCommentFilterInput | null,
};

export type OnCreateBoardItemCommentSubscription = {
  onCreateBoardItemComment?:  {
    __typename: "BoardItemComment",
    id: string,
    boardItem:  {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    },
    comment: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    boardItemCommentBoardItemId: string,
  } | null,
};

export type OnUpdateBoardItemCommentSubscriptionVariables = {
  filter?: ModelSubscriptionBoardItemCommentFilterInput | null,
};

export type OnUpdateBoardItemCommentSubscription = {
  onUpdateBoardItemComment?:  {
    __typename: "BoardItemComment",
    id: string,
    boardItem:  {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    },
    comment: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    boardItemCommentBoardItemId: string,
  } | null,
};

export type OnDeleteBoardItemCommentSubscriptionVariables = {
  filter?: ModelSubscriptionBoardItemCommentFilterInput | null,
};

export type OnDeleteBoardItemCommentSubscription = {
  onDeleteBoardItemComment?:  {
    __typename: "BoardItemComment",
    id: string,
    boardItem:  {
      __typename: "BoardItem",
      id: string,
      board:  {
        __typename: "Board",
        id: string,
        title: string,
        header?: string | null,
        footer?: string | null,
        listViewItems: Array< string | null >,
        listSort:  {
          __typename: "TSortItem",
          item: string,
          sort: SortOrder,
        },
        excludeNoticeFlag: boolean,
        type: BoardType,
        category?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      category?:  {
        __typename: "BoardCatgory",
        id: string,
        name: string,
        parent?:  {
          __typename: "BoardCatgory",
          id: string,
          name: string,
          parent?:  {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null,
          children?:  {
            __typename: "ModelBoardCatgoryConnection",
            nextToken?: string | null,
          } | null,
          sortOrder: number,
          createdAt: string,
          updatedAt: string,
          boardCatgoryChildrenId: string,
          boardCategoryId: string,
        } | null,
        children?:  {
          __typename: "ModelBoardCatgoryConnection",
          items:  Array< {
            __typename: "BoardCatgory",
            id: string,
            name: string,
            sortOrder: number,
            createdAt: string,
            updatedAt: string,
            boardCatgoryChildrenId: string,
            boardCategoryId: string,
          } | null >,
          nextToken?: string | null,
        } | null,
        sortOrder: number,
        createdAt: string,
        updatedAt: string,
        boardCatgoryChildrenId: string,
        boardCategoryId: string,
      } | null,
      title: string,
      content: string,
      tag: string,
      author: string,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        items:  Array< {
          __typename: "Attachment",
          id: string,
          filename: string,
          filetype: string,
          path: string,
          createdAt: string,
          updatedAt: string,
          boardItemAttachmentsId?: string | null,
          author?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      isNotice?: boolean | null,
      createdAt: string,
      updatedAt: string,
      boardItemBoardId: string,
      boardItemCategoryId?: string | null,
    },
    comment: string,
    author: string,
    createdAt: string,
    updatedAt: string,
    boardItemCommentBoardItemId: string,
  } | null,
};
