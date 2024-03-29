import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useAuth } from './hooks/useAuth';

const Layout = () => {
  const { auth } = useAuth();

  return (
    <div className="app">
      <Navbar user={auth} />
      <div className="min-h-[75vh]">
        <Outlet context={[auth]} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
