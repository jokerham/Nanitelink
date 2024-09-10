// src/layout/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './Header';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';

const Layout: React.FC = () => {
  return (
    <Box className="NL_flex_column">
      <Header />
      <main className="NL_container NL_main NL_flex_column">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"/>
    </Box>
  );
};

export default Layout;
