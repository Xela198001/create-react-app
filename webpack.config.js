const path = require("path");
//const ​webpack ​ = require(​ 'webpack'​ )​
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.jsx",
    // style: "./src/css",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "style-loader",
        }),
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
  },
};
