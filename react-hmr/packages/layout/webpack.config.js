
const STYLE_LOADER = {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader'],
};

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3005,
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
};
