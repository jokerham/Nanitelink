// src/App.tsx
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Layout from 'layout/Layout';
import AdminLayout from 'layout/admin/AdminLayout';
import Home from 'pages/Home';
import Signup from 'pages/auth/Signup';
import PageNotFound from 'layout/PageNotFound';
import Dashboard from 'pages/admin/Dashboard';
import Members from 'pages/admin/Members';
import 'App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="admin/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="members/">
            <Route index element={<Members />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
