import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import BottomNavItem from './BottomNavItem';

const meta: Meta<typeof BottomNavItem> = {
  title: 'Navigation/BottomNavItem',
  component: BottomNavItem,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BottomNavItem>;

export const Default: Story = {
  args: {
    path: '/',
    label: '홈',
    icon: () => <div className='h-6 w-6 rounded bg-gray-300' />,
  },
};

export const Active: Story = {
  args: {
    path: '/',
    label: '홈',
    icon: () => <div className='bg-main h-6 w-6 rounded' />,
  },
};

export const Inactive: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/other']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    path: '/',
    label: '홈',
    icon: () => <div className='h-6 w-6 rounded bg-gray-300' />,
  },
};
