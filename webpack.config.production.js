const webpack = require('webpack');
const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: [ // entry point, src/app.js for example
    path.join(__dirname, 'src', 'app'),
  ],
  output: { // output like build/app.739d2c317737728e6752.js
    path: path.join(__dirname, 'build'),
    filename: 'app.[hash].js',
  },
  module: {
    noParse: ['node_modules/react'],
    loaders: [
      { test: /(.js|.jsx)/, exclude: /node_modules/, loaders: ['babel?cacheDirectory=true'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /(.woff|.ttf|.eot|.svg|.jpg|.png)/, loader: "file-loader" }
    ],
  },
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.json', '.jsx', '.scss', '.svg'],
  },
  stats: {
    colors: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.production.tpl') // src/index.production.tpl for index.html template
    }),
    new ExtractTextPlugin('app.[contenthash].css', { // extract all css as app.739d2c317737728e6752.css
      allChunks: true,
    }),
  ],
};

module.exports = config;
