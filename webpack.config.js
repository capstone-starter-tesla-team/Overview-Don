const webpack = require("webpack");

module.exports = {
  context: __dirname + "/client",
  entry: "./index.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "env"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
    ],
  },
  output: {
    path: __dirname + "/public",
    filename: "app.js",
  },
};
