import Layout from '../Layout';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../components/RequireAuth';
import { protectedRoutes, publicRoutes } from './routes';

const RootRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* Public routes */}
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
      ))}

      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        {protectedRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Route>
    </Route>
  </Routes>
);

export default RootRoutes;
