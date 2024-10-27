/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getParameter = /* GraphQL */ `query GetParameter($id: ID!) {
  getParameter(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetParameterQueryVariables,
  APITypes.GetParameterQuery
>;
export const listParameters = /* GraphQL */ `query ListParameters(
  $filter: ModelParameterFilterInput
  $limit: Int
  $nextToken: String
) {
  listParameters(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          items {
            id
            inputType
            label
            defaultValue
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
            moduleId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParametersQueryVariables,
  APITypes.ListParametersQuery
>;
export const getAction = /* GraphQL */ `query GetAction($id: ID!) {
  getAction(id: $id) {
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
` as GeneratedQuery<APITypes.GetActionQueryVariables, APITypes.GetActionQuery>;
export const listActions = /* GraphQL */ `query ListActions(
  $filter: ModelActionFilterInput
  $limit: Int
  $nextToken: String
) {
  listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
            moduleId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActionsQueryVariables,
  APITypes.ListActionsQuery
>;
export const getModule = /* GraphQL */ `query GetModule($id: ID!) {
  getModule(id: $id) {
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
` as GeneratedQuery<APITypes.GetModuleQueryVariables, APITypes.GetModuleQuery>;
export const listModules = /* GraphQL */ `query ListModules(
  $filter: ModelModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListModulesQueryVariables,
  APITypes.ListModulesQuery
>;
export const getMenu = /* GraphQL */ `query GetMenu($id: ID!) {
  getMenu(id: $id) {
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
` as GeneratedQuery<APITypes.GetMenuQueryVariables, APITypes.GetMenuQuery>;
export const listMenus = /* GraphQL */ `query ListMenus(
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
            moduleId
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMenusQueryVariables, APITypes.ListMenusQuery>;
export const getDocument = /* GraphQL */ `query GetDocument($id: ID!) {
  getDocument(id: $id) {
    id
    title
    content
    author
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDocumentQueryVariables,
  APITypes.GetDocumentQuery
>;
export const listDocuments = /* GraphQL */ `query ListDocuments(
  $filter: ModelDocumentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      author
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDocumentsQueryVariables,
  APITypes.ListDocumentsQuery
>;
