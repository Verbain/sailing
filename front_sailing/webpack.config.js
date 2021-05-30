const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  //This property defines where the application starts
  entry:'./src/index.js',
  
  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
    },
  devServer: {
    historyApiFallback: true,
    }, 
  //Setup loaders
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: 'babel-loader'
      }
    ]
  },
    
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve( __dirname, 'public/index.html' ),
      filename : 'index.html'
    })
  ]
}