const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/vue-transition-router.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "transition.min.js",
    library: "MA",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [path.resolve(__dirname, "node_modules")]
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};