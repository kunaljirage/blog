import Home from '../pages/Home';
import Posts from '../pages/Posts';
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
    path: '/posts',
    component: Posts,
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
