const path = require("path");
const { merge } = require("webpack-merge");
const { loadCss } = require("./webpack.parts");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (...args) => {
  console.log({ args });
  return merge([
    {
      entry: "./src/index.tsx",
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      output: {
        publicPath: "",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "public", "index.html"),
          // favicon: paths.public + "/favicon.ico",
          // publicUrl: publicPath,
          // this is a workaround for the injection of the code from the output file into the .html
          // the injection will be handled in the template file
          inject: false,
        }),
      ],
    },

    loadCss(),
  ]);
};
