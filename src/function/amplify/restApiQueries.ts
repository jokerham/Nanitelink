import * as Auth from 'aws-amplify/auth';
import * as API from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import { CreateBoardItemInput } from 'API';
import config from '../../aws-exports';

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

export interface IGetUsersResult {
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

export type ExtendedCreateBoardItemInput = CreateBoardItemInput & {
  attachments?: string[]; // Add optional array of strings
};

interface ICreateBoardItemProps {
  boardId: string, 
  boardItemInput: ExtendedCreateBoardItemInput
}

export const createBoardItem = async ({boardId, boardItemInput}: ICreateBoardItemProps) => {
  try {
    // Retrieve the current user's Cognito session
    const session = await Auth.fetchAuthSession();
    const idToken = session.tokens?.idToken; // Get the JWT token

    // Ensure payload is a plain object and serialized correctly
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

export const incrementBoardItemViews = async (id: string) => {
  try {
    const response = await API.post({
      apiName: 'boarditem',
      path: `/boarditem/increment-views/${id}`,
      options: {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    }).response;
    const jsonResult = await response.body.json();
    if (jsonResult !== null && typeof jsonResult === 'object' && 'success' in jsonResult) {
      return jsonResult.success ?? false;
    }
  } catch (error) {
    console.error('Error incrementing views:', error);
    throw new Error('Failed to increment views. Please try again.');
  }
};

export interface IBoardItem {
  id: string,
  seq: number,
  isNotice?: boolean,
  board: {
    id: string,
    title: string,
    description: string,
  },
  title: string,
  content: string,
  views: number,
  author: {
    username: string,
    email: string,
    name: string,
    nickname: string,
    picture: string,
    birthdate: string,
  },
  tag?: string,
  attachments: {
    id: string
    filename: string,
    fileSize: number,
    fileType: string,
    path: string,
  }[],
  boardItemCategoryId?: string,
  createdAt: string,
  updatedAt: string,  
}

export const getBoardItem = async (boardTitle: string, boardItemSeq: number) => {
  try {
    const response = await API.get({
      apiName: 'boarditem',
      path: `/boarditem/get/${boardTitle}/${boardItemSeq}`,
      options: {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': config.aws_appsync_apiKey
        },
      }
    }).response;
    const jsonResult = await response.body.json() as unknown as IBoardItem;
    return jsonResult;
  } catch (error) {
    console.error('Error fetching board item:', error);
    throw new Error('Failed to fetch board item. Please try again.');
  }
};

export async function deleteBoardItem(boardItemId: string): Promise<void> {
  try {
    // 1. Get the token
    const token = await getToken();

    // 2. Set the API name and path
    const apiName = 'boarditem'; // Replace with your API name in Amplify
    const path = `/boarditem/delete/${boardItemId}`;

    // 3. Set the request options with the Authorization header
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // 4. Call the API DELETE method
    //const response = await API.del(apiName, path, requestOptions);
    const response = await API.post({
      apiName: apiName,
      path: path,
      options: requestOptions,
    }).response;

    // Handle response if needed, but do not return it
  } catch (error) {
    console.error('Error deleting board item:', error);
    const errorMessage = (error as { response?: { data?: { message?: string } } }).response?.data?.message || 'Failed to delete board item';
    throw new Error(errorMessage);
  }
}

const getToken = async() => {
  // Retrieve the current user's Cognito session
  const session = await Auth.fetchAuthSession();
  const idToken = session.tokens?.idToken; // Get the JWT token
  return idToken;
};