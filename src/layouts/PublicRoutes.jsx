import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';

const PublicRoutes = () => (
  <div className="app">
    <Navbar />
    <Notification />
    <div className="min-h-[75vh]">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default PublicRoutes;
