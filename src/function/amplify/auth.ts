import { fetchAuthSession } from 'aws-amplify/auth';
import axios from 'axios';
import config from 'aws-exports';

export const isAdminUser = async() => {
  try {
    const session = await fetchAuthSession();
    const groups = (await session).tokens?.idToken?.payload['cognito:groups'] as string[];
    const isAdmin = groups?.includes('Admin');
    return isAdmin;
  } catch (error) {
    //console.error('Error checking admin status:', error);
    return false;
  }
};

export const getUserAttributes = async (username: string) => {
  const apiUrl = `${config.aws_cloud_logic_custom[0].endpoint}/user/attributes/${username}`; // Replace with your API Gateway URL

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching user attributes:', error);
    throw error;
  }
};