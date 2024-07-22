import Home from '../pages/Home';
import ShowPost from '../pages/ShowPost';
import Write from '../pages/Write';

export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/post/:id',
    component: ShowPost,
  },
];

export const protectedRoutes = [
  {
    path: '/write',
    component: Write,
  },
];
