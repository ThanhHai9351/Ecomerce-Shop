import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Adjust path to your test files
  timeout: 30000,     // Set test timeout if necessary
  use: {
    headless: false,  // Set to false to see the browser running
    viewport: { width: 1280, height: 720 },
  },
});
