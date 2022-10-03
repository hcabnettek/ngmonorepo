// @ts-check

const { withModuleFederation } = require('@nrwl/react/module-federation');
const baseConfig = require('./module-federation.config');

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', '//app1.example.com'],
   *   ['app2', '//app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
  *remotes: [
    ['shop', '../../shop'],
    ['cart', '//example.com/path/to/app2/remoteEntry.js'],
    ['about', '//example.com/path/to/app2/remoteEntry.js'],
  ],
  */
  remotes: [
    ['shop', 'http://localhost:8080/shop'],
    ['cart', 'http://localhost:8080/cart'],
    ['about', 'http://localhost:8080/about'],
  ],
};

module.exports = withModuleFederation(prodConfig);
