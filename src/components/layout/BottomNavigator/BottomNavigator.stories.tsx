import type { Meta, StoryObj } from '@storybook/react';

import BottomNavigator from './BottomNavigator';

const meta: Meta<typeof BottomNavigator> = {
  title: 'Layout/BottomNavigator',
  component: BottomNavigator,
  parameters: {
    layout: 'iphone14',
  },
};

export default meta;

type Story = StoryObj<typeof BottomNavigator>;

export const Default: Story = {};
