/* eslint-disable @typescript-eslint/no-explicit-any */

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',

  viteFinal: async (config) => {
    config.plugins = config.plugins?.filter((plugin: any) => plugin?.name !== 'vite-plugin-svgr');

    config.plugins = config.plugins?.map((plugin: any) => {
      if (plugin?.name === 'vite:react-babel') {
        return {
          ...plugin,
          options: {
            babel: {
              plugins: [],
            },
          },
        };
      }
      return plugin;
    });

    return config;
  },
};

export default config;
