import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useAuth } from './hooks/useAuth';
import Notification from './components/Notification';
import { notificationHandler } from './helpers/notificationHandler';

const Layout = () => {
  const { auth } = useAuth();
  //  remove the button after devlopment
  return (
    <div className="app">
      <Navbar user={auth} />
      <button
        onClick={() =>
          notificationHandler.addNotification(
            'This is a notification message',
            'info'
          )
        }
      >
        click
      </button>
      <Notification />
      <div className="min-h-[75vh]">
        <Outlet context={[auth]} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
