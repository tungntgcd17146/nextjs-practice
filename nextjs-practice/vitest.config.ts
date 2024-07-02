import { defineConfig } from 'vitest/config';
import * as path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '') }],
  },
  plugins: [react()],
});
