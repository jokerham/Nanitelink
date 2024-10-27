/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateParameter = /* GraphQL */ `subscription OnCreateParameter($filter: ModelSubscriptionParameterFilterInput) {
  onCreateParameter(filter: $filter) {
    id
    inputType
    label
    defaultValue
    optionValues {
      value
      label
      __typename
    }
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    moduleParametersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateParameterSubscriptionVariables,
  APITypes.OnCreateParameterSubscription
>;
export const onUpdateParameter = /* GraphQL */ `subscription OnUpdateParameter($filter: ModelSubscriptionParameterFilterInput) {
  onUpdateParameter(filter: $filter) {
    id
    inputType
    label
    defaultValue
    optionValues {
      value
      label
      __typename
    }
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    moduleParametersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateParameterSubscriptionVariables,
  APITypes.OnUpdateParameterSubscription
>;
export const onDeleteParameter = /* GraphQL */ `subscription OnDeleteParameter($filter: ModelSubscriptionParameterFilterInput) {
  onDeleteParameter(filter: $filter) {
    id
    inputType
    label
    defaultValue
    optionValues {
      value
      label
      __typename
    }
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    moduleParametersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteParameterSubscriptionVariables,
  APITypes.OnDeleteParameterSubscription
>;
export const onCreateAction = /* GraphQL */ `subscription OnCreateAction($filter: ModelSubscriptionActionFilterInput) {
  onCreateAction(filter: $filter) {
    id
    name
    isIndex
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    moduleActionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActionSubscriptionVariables,
  APITypes.OnCreateActionSubscription
>;
export const onUpdateAction = /* GraphQL */ `subscription OnUpdateAction($filter: ModelSubscriptionActionFilterInput) {
  onUpdateAction(filter: $filter) {
    id
    name
    isIndex
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    moduleActionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActionSubscriptionVariables,
  APITypes.OnUpdateActionSubscription
>;
export const onDeleteAction = /* GraphQL */ `subscription OnDeleteAction($filter: ModelSubscriptionActionFilterInput) {
  onDeleteAction(filter: $filter) {
    id
    name
    isIndex
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    moduleActionsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActionSubscriptionVariables,
  APITypes.OnDeleteActionSubscription
>;
export const onCreateModule = /* GraphQL */ `subscription OnCreateModule($filter: ModelSubscriptionModuleFilterInput) {
  onCreateModule(filter: $filter) {
    id
    name
    parameters {
      items {
        id
        inputType
        label
        defaultValue
        optionValues {
          value
          label
          __typename
        }
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleParametersId
        __typename
      }
      nextToken
      __typename
    }
    menus {
      items {
        id
        name
        parent
        menuType
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        moduleId
        parameterSettings {
          id
          value
          __typename
        }
        url
        sortOrder
        createdAt
        updatedAt
        moduleMenusId
        __typename
      }
      nextToken
      __typename
    }
    actions {
      items {
        id
        name
        isIndex
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleActionsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateModuleSubscriptionVariables,
  APITypes.OnCreateModuleSubscription
>;
export const onUpdateModule = /* GraphQL */ `subscription OnUpdateModule($filter: ModelSubscriptionModuleFilterInput) {
  onUpdateModule(filter: $filter) {
    id
    name
    parameters {
      items {
        id
        inputType
        label
        defaultValue
        optionValues {
          value
          label
          __typename
        }
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleParametersId
        __typename
      }
      nextToken
      __typename
    }
    menus {
      items {
        id
        name
        parent
        menuType
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        moduleId
        parameterSettings {
          id
          value
          __typename
        }
        url
        sortOrder
        createdAt
        updatedAt
        moduleMenusId
        __typename
      }
      nextToken
      __typename
    }
    actions {
      items {
        id
        name
        isIndex
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleActionsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateModuleSubscriptionVariables,
  APITypes.OnUpdateModuleSubscription
>;
export const onDeleteModule = /* GraphQL */ `subscription OnDeleteModule($filter: ModelSubscriptionModuleFilterInput) {
  onDeleteModule(filter: $filter) {
    id
    name
    parameters {
      items {
        id
        inputType
        label
        defaultValue
        optionValues {
          value
          label
          __typename
        }
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleParametersId
        __typename
      }
      nextToken
      __typename
    }
    menus {
      items {
        id
        name
        parent
        menuType
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        moduleId
        parameterSettings {
          id
          value
          __typename
        }
        url
        sortOrder
        createdAt
        updatedAt
        moduleMenusId
        __typename
      }
      nextToken
      __typename
    }
    actions {
      items {
        id
        name
        isIndex
        module {
          id
          name
          parameters {
            nextToken
            __typename
          }
          menus {
            nextToken
            __typename
          }
          actions {
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        moduleActionsId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteModuleSubscriptionVariables,
  APITypes.OnDeleteModuleSubscription
>;
export const onCreateMenu = /* GraphQL */ `subscription OnCreateMenu($filter: ModelSubscriptionMenuFilterInput) {
  onCreateMenu(filter: $filter) {
    id
    name
    parent
    menuType
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    moduleId
    parameterSettings {
      id
      value
      __typename
    }
    url
    sortOrder
    createdAt
    updatedAt
    moduleMenusId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMenuSubscriptionVariables,
  APITypes.OnCreateMenuSubscription
>;
export const onUpdateMenu = /* GraphQL */ `subscription OnUpdateMenu($filter: ModelSubscriptionMenuFilterInput) {
  onUpdateMenu(filter: $filter) {
    id
    name
    parent
    menuType
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    moduleId
    parameterSettings {
      id
      value
      __typename
    }
    url
    sortOrder
    createdAt
    updatedAt
    moduleMenusId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMenuSubscriptionVariables,
  APITypes.OnUpdateMenuSubscription
>;
export const onDeleteMenu = /* GraphQL */ `subscription OnDeleteMenu($filter: ModelSubscriptionMenuFilterInput) {
  onDeleteMenu(filter: $filter) {
    id
    name
    parent
    menuType
    module {
      id
      name
      parameters {
        items {
          id
          inputType
          label
          defaultValue
          optionValues {
            value
            label
            __typename
          }
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleParametersId
          __typename
        }
        nextToken
        __typename
      }
      menus {
        items {
          id
          name
          parent
          menuType
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          moduleId
          parameterSettings {
            id
            value
            __typename
          }
          url
          sortOrder
          createdAt
          updatedAt
          moduleMenusId
          __typename
        }
        nextToken
        __typename
      }
      actions {
        items {
          id
          name
          isIndex
          module {
            id
            name
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          moduleActionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    moduleId
    parameterSettings {
      id
      value
      __typename
    }
    url
    sortOrder
    createdAt
    updatedAt
    moduleMenusId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMenuSubscriptionVariables,
  APITypes.OnDeleteMenuSubscription
>;
export const onCreateDocument = /* GraphQL */ `subscription OnCreateDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onCreateDocument(filter: $filter) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDocumentSubscriptionVariables,
  APITypes.OnCreateDocumentSubscription
>;
export const onUpdateDocument = /* GraphQL */ `subscription OnUpdateDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onUpdateDocument(filter: $filter) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDocumentSubscriptionVariables,
  APITypes.OnUpdateDocumentSubscription
>;
export const onDeleteDocument = /* GraphQL */ `subscription OnDeleteDocument($filter: ModelSubscriptionDocumentFilterInput) {
  onDeleteDocument(filter: $filter) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDocumentSubscriptionVariables,
  APITypes.OnDeleteDocumentSubscription
>;
