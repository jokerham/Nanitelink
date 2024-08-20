export type AmplifyDependentResourcesAttributes = {
  "api": {
    "nanitelink": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    },
    "users": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "auth": {
    "nanitelinke874e11c": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "listUsersFunction": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "profileImages": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}