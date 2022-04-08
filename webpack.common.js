const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.join(__dirname, "__src", "assets", "js", "index.js")
  },

  output: {
    path: path.join(__dirname, "docs", "assets")
  },

  module: {
    rules: [
      {
        test: /\.((eot)|(woff)|(woff2)|(ttf))(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader?name=/[hash].[ext]"
        }
      },

      {
        test: /\.json$/,
        use: {
          loader: "json-loader"
        }
      },

      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          context: '__src/assets',
          from: 'img/**/*'
        },
        {
          context: '__src/assets',
          from: 'vid/**/*'
        },
        {
          context: '.',
          from: 'CNAME',
          to: '../'
        },
        {
          context: '.',
          from: '.nojekyll',
          to: '../'
        },
        {
          context: '.',
          from: 'robots.txt',
          to: '../'
        }
      ]
    }),

    //new CopyWebpackPlugin([
    //  {
    //    from: "./src/fonts/",
    //    to: "fonts/",
    //    flatten: true
    //  }
    //])
  ]
};
