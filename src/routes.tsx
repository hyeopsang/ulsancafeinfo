import { createBrowserRouter } from 'react-router';
import AppLayout from './components/layout/Layout';
import HomePage from './pages/HomePage';

const RouterInfo = [
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

export const routes = createBrowserRouter(RouterInfo);
