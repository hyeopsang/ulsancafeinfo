import type { Meta, StoryObj } from '@storybook/react';
import BottomNavigator from './BottomNavigator';

const meta: Meta<typeof BottomNavigator> = {
  title: 'Navigation/BottomNavigator',
  component: BottomNavigator,
};

export default meta;

type Story = StoryObj<typeof BottomNavigator>;

export const Default: Story = {};
