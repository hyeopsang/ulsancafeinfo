import { createBrowserRouter } from 'react-router';
import AppLayout from './components/layout/Layout';
import HomePage from './pages/HomePage';

export const routeObjects = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export const routes = createBrowserRouter(routeObjects);
