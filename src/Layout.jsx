import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useAuth } from './hooks/useAuth';

const Layout = () => {
  const user = useAuth();

  return (
    <div className="app">
      <Navbar user={user} />
      <div className="min-h-[75vh]">
        <Outlet context={[user]} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
