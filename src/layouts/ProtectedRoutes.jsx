import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoutes = () => {
  const { auth } = useAuth();
  const location = useLocation();
  if (auth) {
    return <Outlet />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedRoutes;
