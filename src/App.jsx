import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Write from './pages/Write';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './assets/stylesheets/main.scss';
import ShowPost from './pages/ShowPost';

const Layout = () => (
  <div className="app">
    <Navbar />
    <div className="min-h-[75vh]">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <ShowPost />,
      },
      {
        path: '/write',
        element: <Write />,
      },
    ],
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
