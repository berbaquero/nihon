const path = require("path");
const webpack = require("webpack");

const DEV_MODE = process.env.NODE_ENV !== "production";

const config = {
  // Entry points
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },

  // Loaders
  module: {
    rules: [{ test: /\.(js)$/, use: "babel-loader" }],
  },

  // Plugins
  plugins: !DEV_MODE ? [new webpack.optimize.UglifyJsPlugin()] : [],
};

module.exports = config;
