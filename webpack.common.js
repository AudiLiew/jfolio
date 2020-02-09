const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

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
        loader: "file-loader?name=/[hash].[ext]"
      },

      {test: /\.json$/, loader: "json-loader"},

      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {cacheDirectory: true}
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

    new CopyWebpackPlugin([
      {
        context: '__src/assets',
        from: 'img/**/*'
      },
      {
        context: '.',
        from: 'CNAME',
        to: '../'
      },
      {
        context: '.',
        from: 'robots.txt',
        to: '../'
      }
    ]),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: null,
      pngquant: {
        speed: 1,
        quality: "75-100"
      },
      svgo: {
        removeViewBox: false
      },
      plugins: [
        imageminMozjpeg({
          quality: 90,
          progressive: true
        })
      ]
    })

    //new CopyWebpackPlugin([
    //  {
    //    from: "./src/fonts/",
    //    to: "fonts/",
    //    flatten: true
    //  }
    //])
  ]
};
