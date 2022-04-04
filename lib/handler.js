const cypress = require("cypress");
const { join } = require("path");
/**
 * https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/fundamentals__module-api/e2e-tests.js
 */

/**
 * TODO:    "Error: The Test Runner unexpectedly exited via a close event with signal SIGTRAP",
 */
module.exports.handler = async () => {
  /**
   * https://docs.cypress.io/guides/guides/module-api#cypress-run
   */
  const testRun = await cypress.run({
    config: {
      video: "false"
    },
    /**
     * https://docs.cypress.io/guides/guides/module-api#Examples
     */
    spec: join(__dirname, "./spec.js"),
    browser: "firefox"
  });

  console.log(testRun);
};
