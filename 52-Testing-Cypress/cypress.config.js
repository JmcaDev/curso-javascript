const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress',
    viewportHeight: 1500,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false
  },
});
