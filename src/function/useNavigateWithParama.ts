import { useNavigate } from 'react-router-dom';
import queryString from 'query-string'; // Optional, for easier query parameter management

const useNavigateWithParams = () => {
  const navigate = useNavigate();

  const navigateWithParams = (path: string, params: Record<string, any>) => {
    const query = queryString.stringify(params);
    navigate(`${path}?${query}`);
  };

  return navigateWithParams;
};

export default useNavigateWithParams;
