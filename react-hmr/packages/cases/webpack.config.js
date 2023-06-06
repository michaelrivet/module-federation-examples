const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3004,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'cases',
      filename: 'remoteEntry.js',
      exposes: {
        './caseLog': './src/caseLog',
      },
    }),
  ],
};
