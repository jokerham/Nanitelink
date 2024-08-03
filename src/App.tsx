// src/App.tsx
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Layout from 'layout/Layout';
import Home from 'pages/Home';
import Signup from 'pages/auth/Signup';
import PageNotFound from 'layout/PageNotFound';
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
      </Routes>
    </Router>
  );
}

export default App;
