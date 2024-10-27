import { fetchAuthSession } from 'aws-amplify/auth';

const isAdminUser = async() => {
  const session = await fetchAuthSession();
  const groups = (await session).tokens?.idToken?.payload['cognito:groups'] as string[];
  const isAdmin = groups?.includes('Admin');
  return isAdmin;
};

export {
  isAdminUser
};