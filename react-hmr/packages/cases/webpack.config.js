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
};
