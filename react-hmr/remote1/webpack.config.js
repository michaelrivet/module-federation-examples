const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const STYLE_LOADER = {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader'],
};

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, 'dist'),
    port: 3001,
    liveReload: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
          plugins: [require.resolve('react-refresh/babel')],
        },
      },
      STYLE_LOADER,
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
        './Heading': './src/Heading',
      },
      remotes: {
        libs: 'libs@[libsUrl]/remoteEntry.js',
      },
      shared: {
        "moment": {
          // eager: true,
          singleton: true,
        },
        "react": {
          // eager: true,
          singleton: true,
        },
        "react-dom": {
          // eager: true,
          singleton: true,
        },
        "react-router-dom": {
          // eager: true,
          singleton: true,
        },
        'styled-components': {
          // eager: true,
          singleton: true,
        },
        '@sproutsocial/racine': {
          // eager: true,
          singleton: true,
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main'],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/],
    }),
  ],
};
