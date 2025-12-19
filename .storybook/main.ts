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
    // React plugin의 babel 설정을 초기화
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
