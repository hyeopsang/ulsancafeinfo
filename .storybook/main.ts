import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';
import type { PluginOption } from 'vite';
import svgr from '@svgr/rollup';

// ESM 환경에서 __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

    // SVGR 플러그인 추가 (@svgr/rollup 사용)
    config.plugins = config.plugins || [];
    config.plugins.push(
      svgr({
        include: '**/*.svg',
        icon: true,
        dimensions: true,
        titleProp: true,
        exportType: 'default',
        jsxRuntime: 'automatic',
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
