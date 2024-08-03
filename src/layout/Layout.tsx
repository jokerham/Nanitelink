// src/layout/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import 'react-toastify/dist/ReactToastify.css';

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="NL_container NL_main">
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

export default Layout;
