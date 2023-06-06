const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const STYLE_LOADER = {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader'],
};

module.exports = {
  entry: {
    listening: './monolith/pages/listening/index',
    agent_workspace: './monolith/pages/agent_workspace/index'
  },
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: path.join(__dirname, 'dist'),
    port: 3003,
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['agent_workspace'],
    }),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.js$/],
    }),
  ],
};
