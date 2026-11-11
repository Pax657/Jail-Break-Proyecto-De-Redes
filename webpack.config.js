const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // Application entry point
  entry: './src/index.js',

  // Where the generated bundle is saved
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true // Cleans the 'dist' folder before each build
  },

  // Generates the HTML from the template and injects the bundle
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    // Copies the assets (audio, images...) to dist/assets
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/assets', to: 'assets' }]
    })
  ],

  // Development server with live reload
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
    open: true, // Opens the browser automatically
    hot: true
  },

  // Use polling to detect changes (virtualized environments don't emit file events)
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/
  },

  // Phaser exceeds the recommended size limit; hide that warning
  performance: { hints: false },

  mode: 'development'
};
