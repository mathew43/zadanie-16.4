const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'); // załadowanie pluginu htrml-webpack
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//webpack.config.js
module.exports = {
    entry: './src/index.js',
        output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    modules: true
                  }
                }
              ]
            }
          ]
        },

    plugins: [
    //   new webpack.optimize.UglifyJsPlugin(),
    //   new HtmlWebpackPlugin({
    //   template: 'src/index.html',
    //   filename: 'index.html',
    //   inject: 'body'
    // })
      ]
};
