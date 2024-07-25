import './assets/stylesheets/main.scss';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { protectedRoutes, publicRoutes } from './routes/routes';
import ProtectedRoutes from './layouts/ProtectedRoutes';
import PublicRoutes from './layouts/PublicRoutes';
import AuthRoutes from './layouts/AuthRoutes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* AuthRoutes routes */}
      <Route element={<AuthRoutes />}>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Route>

      <Route path="/" element={<PublicRoutes />}>
        {/* Public routes */}
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}

        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          {protectedRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
