const path = require("path");

module.exports = {
  // エントリーポイント
  entry: { app: "./src/app.js" },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.scss$/,
        // javascript内にバンドルされているcssをhtmlにバンドルする
        // ↑
        // cssをwebpackにバンドルする
        // ↑
        // ....
        // ↑
        // sassからcssへの変換
        // 下から実行されていく
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};
