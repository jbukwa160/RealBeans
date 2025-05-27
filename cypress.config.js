const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "dbxrmd",
  e2e: {
    baseUrl: 'https://r0971268-realbeans.myshopify.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-web-security');
        }
        return launchOptions;
      });
    },
  },
});