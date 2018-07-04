const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, '../server/public'),
  JS: path.resolve(__dirname, './'),
  SRC: path.resolve(__dirname, '.')
};

module.exports = {
  entry: path.join(paths.JS, 'index.jsx'),
  mode: 'development',
  output: {
    path: paths.DIST,
    filename: 'app.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html')
    })
  ],
  devServer: {
    port: 3000,
    historyApiFallback: { index: `${paths.DIST}/index.html` }
  },
  module: {
    // apply rules to files that meet given conditions
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['babel-plugin-transform-class-properties', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
