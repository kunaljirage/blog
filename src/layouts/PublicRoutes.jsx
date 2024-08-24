import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import { useEffect } from 'react';

const PublicRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Notification />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoutes;
