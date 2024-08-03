// src/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './AdminHeader';
import Footer from 'layout/Footer';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
  return (
    <div>
      <Header />
      <main className="NL_container NL_admin_main">
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
    </div>
  );
};

export default AdminLayout;
