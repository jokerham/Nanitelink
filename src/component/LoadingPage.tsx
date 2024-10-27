import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface LoadingPageProps {
  loading: boolean;
  onComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ loading, onComplete }) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    if (!loading) {
      // Delay for a smoother transition if desired
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (onComplete) onComplete();
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setIsLoading(true);
    }
  }, [loading, onComplete]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      bgcolor="background.default"
    >
      {isLoading && <CircularProgress />}
    </Box>
  );
};

export default LoadingPage;
