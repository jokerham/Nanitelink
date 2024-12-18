import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();

  // Helper function to parse query parameters
  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };
  
  // Example: Access specific query parameter
  const queryParams = getQueryParams();
  const key = queryParams.get('seq'); // Replace 'key' with your query parameter name

  console.log('Query Params:', queryParams.toString()); // Log query params
  console.log('Specific Query Param (key):', key); // Log specific query param
  
  return (
    <>Detail</>
  );
};

export default Detail;
