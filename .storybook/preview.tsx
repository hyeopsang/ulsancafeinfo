import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;
