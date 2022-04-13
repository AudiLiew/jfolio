const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  stats: {
    colors: true,
    preset: 'minimal'
  },
  performance: { hints: isDev ? false : 'warning' },
  entry: {
    main: path.join(__dirname, "__src", "assets", "js", "index.js")
  },
  output: {
    path: path.join(__dirname, "docs", "assets"),
    filename: "[name].js",
    chunkFilename: "[id].css"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  ...(!isDev && {
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css"
        })
      ],
      usedExports: true,
      sideEffects: true
    }
  }),
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "postcss-loader", 
          "sass-loader"
        ]
      }
    ]
  }
};
