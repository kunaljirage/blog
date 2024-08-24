import Home from '../pages/Home';
import Post from '../pages/Post';
import Write from '../pages/Write';
import Contact from '../pages/Contact';
import Subscribe from '../pages/Subscribe';

export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/subscribe',
    component: Subscribe,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/post/:id',
    component: Post,
  },
];

export const protectedRoutes = [
  {
    path: '/write',
    component: Write,
  },
];
