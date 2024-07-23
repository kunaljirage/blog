import './assets/stylesheets/main.scss';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import { protectedRoutes, publicRoutes } from './routes/routes';
import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        {/* Public routes */}
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}

        {/* Protected routes */}
        <Route element={<AuthLayout />}>
          {protectedRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Route>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
