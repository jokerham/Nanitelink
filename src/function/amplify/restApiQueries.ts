import * as Auth from 'aws-amplify/auth';
import * as API from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import { CreateBoardItemInput } from 'API';

interface IGetUserById {
  id: string
}

export const getUserById = async (props: IGetUserById) => {
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

export const getUsers = async () => {
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

interface IXreateBoardItemProps {
  boardId: string, 
  boardItemInput: CreateBoardItemInput
}

export const createBoardItem = async ({boardId, boardItemInput}: IXreateBoardItemProps) => {
  try {
    // Retrieve the current user's Cognito session
    const session = await Auth.fetchAuthSession();
    const idToken = session.tokens?.idToken; // Get the JWT token

    // Prepare the payload
    const payload = {
      boardId,
      boardItemInput,
    };

    if (idToken === undefined) {
      throw new Error('No ID token found');
    } else {
      const response = await API.post({
        apiName: 'board',
        path: '/createBoardItem',
        options: {
          body: payload,
          headers: {
            Authorization: idToken.toString(),
            //Authorization: `Bearer ${idToken}`, // Pass the Cognito JWT token in the Authorization header
            'Content-Type': 'application/json',
          },
        }
      }).response;

      console.log('Lambda Response:', response.body);
      return response.body;
    }
  } catch (error) {
    console.error('Error calling Lambda function:', error);
    throw error;
  }
};

export const listBoardItems = async (
  boardId: string,
  page = 1,
  rowsPerPage = 10
): Promise<unknown> => {
  try {
    const payload = {
      boardId,
      page,
      rowsPerPage,
    };

    const response = await API.post({
      apiName: 'board',
      path: '/listBoardItems',
      options: {
        body: payload,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    }).response;
    const jsonResult = await response.body.json();
    return jsonResult;
  } catch (error) {
    console.error('Error fetching board items:', error);
    throw new Error('Failed to fetch board items. Please try again.');
  }
};