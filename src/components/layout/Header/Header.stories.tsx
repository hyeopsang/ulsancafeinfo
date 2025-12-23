import type { Meta, StoryObj } from '@storybook/react';
import { createMemoryRouter, RouterProvider } from 'react-router';

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

const createRouter = () =>
  createMemoryRouter(
    [
      {
        path: '*',
        element: <Header />,
      },
    ],
    {
      initialEntries: ['/'],
    },
  );

export const Default: Story = {
  render: () => <RouterProvider router={createRouter()} />,
};
