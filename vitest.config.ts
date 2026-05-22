import { defineConfig } from 'vitest/config';

// Standalone Vitest config — deliberately does not load the CRXJS plugin,
// which is only needed for the extension build.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
  },
});
