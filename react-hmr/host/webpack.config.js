const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

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
    hot: false,
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
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
        },
      },
      STYLE_LOADER,
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote1: 'remote1@[remote1Url]/remoteEntry.js',
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
    }),
    new LiveReloadPlugin({
      port: 35729,
    }),
  ],
};
