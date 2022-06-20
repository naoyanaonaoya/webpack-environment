const path = require("path");

module.exports = {
  // エントリーポイント
  entry: { app: "./src/app.js" },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
  },

  devtool: "source-map",

  mode: "development",

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        // for webpack5
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: true,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          // Sassをバンドルするための機能
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: true,
            },
          },
        ],

        // for webpack4
        // javascript内にバンドルされているcssをhtmlにバンドルする
        // ↑
        // cssをwebpackにバンドルする
        // ↑
        // ....
        // ↑
        // sassからcssへの変換
        // 下から実行されていく
        // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        // for webpack5
        type: "asset/resource",
        generator: {
          filename: "./assets/images/[name]-[contenthash].[ext]",
        },
        // for webpack4
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //       outputPath: "images",
        //       publicPath: "image",
        //     },
        //   },
        // ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};
