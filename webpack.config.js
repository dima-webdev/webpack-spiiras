const { resolve } = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
const webpack = require('webpack');
//const nib = require('nib');

module.exports = {

  context: __dirname + '/client/src',

   entry: {
    main: './index',
  },


  /*[
    //'webpack-dev-server/client?http://localhost:8080',
     // bundle the client for webpack-dev-server
     // and connect to the provided endpoint

     //'webpack/hot/only-dev-server',
     // bundle the client for hot reloading
     // only- means to only hot reload for successful updates

     //'./main.js'
  ],

  */

  output: {
    path: __dirname + '/client/public',
    filename: '[name].js',
    //library: '[name]'
  },

  plugins: [new HtmlWebpackPlugin()],

  /* devServer */

  devServer: {
    contentBase: path.join(__dirname, "/client/public"),
    compress: true,
    stats: "errors-only",
    open: true,
    //hot: true,
    //publicPath: __dirname + '/client/public'
  },

  // source-maps

  devtool: 'cheap-inline-module-source-map',

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader'
        }]
      },

      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: { minimize: false}
          },{
            loader: 'autoprefixer-loader?browsers=last 10 versions',
          },{
            loader: 'stylus-loader'
          }]
        })
      },

      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        use: [
          { loader: 'file-loader?name=[path][name].[ext]?[hash]'}
        ]
      }

    ]
  },

  plugins: [
   new ExtractTextPlugin("styles.css"),
   //new webpack.HotModuleReplacementPlugin(),
   // enable HMR globally
 ]

};
