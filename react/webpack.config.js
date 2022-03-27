const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // !!! when node_modules excluded - breaks on flow
        // exclude: [path.resolve(__dirname, "node_modules")],

        // add it to include array to let babel take care of flow files
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/bridge"),
        ],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    // !!! when true - breaks on symlinks
    symlinks: false,
  },
};
