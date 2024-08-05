// src/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './AdminHeader';
import Footer from 'layout/Footer';
import AdminMenu from './AdminMenu';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';
import { useState } from 'react';

const AdminLayout = () => {
  return (
    <Box className="NL_admin">
      <Header />
      <main className="NL_container NL_admin_main">
        <AdminMenu />
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </Box>
  );
};

export default AdminLayout;
