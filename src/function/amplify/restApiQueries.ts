import * as Auth from 'aws-amplify/auth';
import * as API from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';

interface IGetUserById {
  id: string
}

const getUserById = async (props: IGetUserById) => {
  const { id } = props;
  // const session = await Auth.fetchAuthSession();
  // const token = session.tokens?.idToken;

  // if (token) {
  const result = await API.get({
    apiName: 'users',
    path: `user/${id}`,
    // options: {
    //   headers: {
    //     Authorization: token.toString()
    //   }
    // },
  }).response;
  return result;
  // }
};

interface IAttribute {
  Name: string
  Value: string
}

interface IMember {
  Attributes: IAttribute[]
}

interface IGetUsersResult {
  users: IMember[],
  totalPages: number
}

const getUsers = async () => {
  const userPoolId = Amplify.getConfig().Auth?.Cognito.userPoolId ?? '';
  const session = await Auth.fetchAuthSession();
  const token = session.tokens?.idToken;

  if (token) {
    const result = await API.get({
      apiName: 'users',
      path: '/users',
      options: {
        headers: {
          Authorization: token.toString()
        },
        queryParams: {
          UserPoolId: userPoolId
        }
      },
    }).response;
    const data = await result.body.json() as unknown as IGetUsersResult;
    return data;
  }
};

export {
  getUserById,
  getUsers
};
