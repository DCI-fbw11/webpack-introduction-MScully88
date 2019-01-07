module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: __dirname,
    filename: "main.js"
  },
  module: {
    rules: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
