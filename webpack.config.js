/* eslint-disable */
var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style-loader!css-loader?module&sourceMap!cssnext-loader!sass?outputStyle=expanded' }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json']
  },
  cssnext: {
    browsers: "last 2 versions",
  }
};
