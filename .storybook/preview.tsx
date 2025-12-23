import { RouterProvider, createMemoryRouter } from 'react-router';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => {
      const router = createMemoryRouter(
        [
          {
            path: '*',
            element: <Story />,
          },
        ],
        {
          initialEntries: ['/'],
        },
      );

      return <RouterProvider router={router} />;
    },
  ],
};

export default preview;
