import { fetchAuthSession } from 'aws-amplify/auth';

const isAdminUser = async() => {
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

export {
  isAdminUser
};