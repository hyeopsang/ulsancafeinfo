import type { Meta, StoryObj } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import BottomNavigator from './BottomNavigator';

const meta: Meta<typeof BottomNavigator> = {
  title: 'Navigation/BottomNavigator',
  component: BottomNavigator,
};
export default meta;

type Story = StoryObj<typeof BottomNavigator>;

const createRouter = (initialPath = '/') =>
  createMemoryRouter(
    [
      {
        path: '*',
        element: <BottomNavigator />,
      },
    ],
    {
      initialEntries: [initialPath],
    },
  );

export const Default: Story = {
  render: () => <RouterProvider router={createRouter('/')} />,
};
