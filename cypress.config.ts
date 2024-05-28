import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    // setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): void {
    //   implement node event listeners here
    // },
  },
});
