// useNavigateWithParams.js
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const useNavigateWithParams = () => {
  const navigate = useNavigate();

  const navigateWithParams = (path: string, params: Record<string, unknown>) => {
    const query = queryString.stringify(params);
    navigate(`${path}?${query}`);
  };

  return navigateWithParams;
};

export default useNavigateWithParams;
