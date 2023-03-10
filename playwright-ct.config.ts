import type { PlaywrightTestConfig } from '@playwright/experimental-ct-vue';
import { devices } from '@playwright/experimental-ct-vue';
import vue from '@vitejs/plugin-vue';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './tests',
  /* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
  snapshotDir: './__snapshots__',
  /* Maximum time one test can run for. */
  timeout: 10 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,

    ctViteConfig: {
      plugins: [vue()]
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'component',
      testDir: './tests/component',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'integration',
      testDir: './tests/integration',
      use: {
        ...devices['Desktop Chrome'],
      },
    }
  ],
};

export default config;
