import Layout from './Layout';
import ShowPost from './pages/ShowPost';
import Home from './pages/Home';
import Write from './pages/Write';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';

const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<ShowPost />} />

      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/write" element={<Write />} />
      </Route>

      {/* catch all routes */}
    </Route>
  </Routes>
);

export default RootRoutes;
