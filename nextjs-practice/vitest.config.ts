import { defineConfig } from 'vitest/config';
import * as path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      enabled: true,
      provider: 'v8',
      exclude: [
        // Add patterns to exclude here, for example, to ignore Storybook files
        '**/*.stories.@(js|jsx|ts|tsx)',
        '**/*.mdx',
        '**/node_modules/**',
        '**/.storybook/**',
        '**/.next/**',
        '**/.eslintrc.json',
        '**/*.config.@(js|jsx|ts|tsx)',
        '**/constants/**',
        '**/types/**',
        '**/coverage/**',
        '**/wdyr.ts',
        '**/materialTheme.ts',
        '**/themes.ts',

        //skip test for app route
        '**/src/app/**',

        //ship test for next auth for now
        '**/auth.ts',
        '**/middleware.ts',
      ],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '') }],
  },
  plugins: [react()],
});
