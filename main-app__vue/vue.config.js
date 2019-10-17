const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        { from: path.resolve(__dirname, 'node_modules/@apps'), to: path.resolve(__dirname, 'dist/apps') },
      ]),
    ],
  },
  devServer: {
    // historyApiFallback: false,
    // 在开发模式下如果不将node_modules/@apps拷贝到dist/apps, 还可以使用如下server代理的方法
    // contentBase: './',
    // proxy: {
    //   '/apps': {
    //     target: 'http://localhost:8080/node_modules/@apps',
    //     pathRewrite: { '^/apps': '' },
    //   },
    // },
  },
};
