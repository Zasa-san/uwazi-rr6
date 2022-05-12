const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const browserConfig = {
  mode: "production",
  entry: "./src/browser/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.(tsx)$/, loader: "ts-loader" },
      { test: /\.css$/, use: ["css-loader"] },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx"],
  },
};

const serverConfig = {
  mode: "production",
  entry: "./src/server/index.tsx",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  module: {
    rules: [
      { test: /\.(tsx)$/, loader: "ts-loader" },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx"],
  },
};

module.exports = [browserConfig, serverConfig];
