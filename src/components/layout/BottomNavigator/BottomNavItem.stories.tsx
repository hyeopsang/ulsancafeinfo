import type { Meta, StoryObj } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import BottomNavItem from './BottomNavItem';

const meta: Meta<typeof BottomNavItem> = {
  title: 'Navigation/BottomNavItem',
  component: BottomNavItem,
};

export default meta;

type Story = StoryObj<typeof BottomNavItem>;

const createRouter = (initialPath: string) =>
  createMemoryRouter(
    [
      {
        path: '/',
        element: (
          <BottomNavItem
            path='/'
            label='홈'
            icon={() => <div className='h-6 w-6 rounded bg-gray-300' />}
          />
        ),
      },
    ],
    {
      initialEntries: [initialPath],
    },
  );

export const Default: Story = {
  render: () => <RouterProvider router={createRouter('/')} />,
};

export const Active: Story = {
  render: () => <RouterProvider router={createRouter('/')} />,
};

export const Inactive: Story = {
  render: () => <RouterProvider router={createRouter('/other')} />,
};
