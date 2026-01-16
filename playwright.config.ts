import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',           // папка с тестами
  timeout: 30_000,              // таймаут одного теста
  retries: 0,                   // количество повторов при падении
  reporter: [['html', { open: 'never' }]],  // HTML-отчёт
  use: {
    headless: true,             // запуск браузера в headless-режиме
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', // видео при падении теста
    screenshot: 'only-on-failure', // скриншоты при падении
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
