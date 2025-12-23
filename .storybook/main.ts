import { resolve } from 'path';
import type { StorybookConfig } from '@storybook/react-vite';
import type { PluginOption } from 'vite';
import svgr from 'vite-plugin-svgr';

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
    // Path alias 설정 추가
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
    };

    // SVGR 플러그인 추가
    config.plugins = config.plugins || [];
    config.plugins.push(
      svgr({
        include: '**/*.svg',
        svgrOptions: {
          icon: true,
          dimensions: true,
          typescript: false,
          ref: true,
          titleProp: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                  },
                },
              },
            ],
          },
          jsxRuntime: 'automatic',
        },
      }),
    );

    // React Compiler 비활성화 (Storybook 호환성)
    config.plugins = config.plugins?.map((plugin: PluginOption) => {
      if (
        plugin &&
        typeof plugin === 'object' &&
        'name' in plugin &&
        plugin.name === 'vite:react-babel'
      ) {
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
