import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Post from '../pages/Post';
import Write from '../pages/Write';

export const publicRoutes = [
  {
    path: '/',
    component: Home,
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
