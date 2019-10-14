/* eslint-disable no-param-reassign */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/apps/vue-app2/'
    : '/',
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.entry = {
        index: './src/sinlgeApp.js',
      };
      config.output.filename = '[name].js';
      config.output.libraryTarget = 'umd';
      config.optimization.minimize = false;
      config.optimization.splitChunks = false;
    }
  },
};
