const config = require('@ria-develop/webpack-config');
const externals = require('@ria-develop/webpack-config/lerna').getExternals();
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    externals,
    plugins: [new HtmlWebpackPlugin({template: './template.html', minify: false})]
  }
].map(config);
