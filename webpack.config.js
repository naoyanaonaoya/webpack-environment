const path = require("path");

module.exports = {
  // エントリーポイント
  entry: "./src/app.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  mode: "development",
};
