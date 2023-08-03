const path = require("path");
const { merge } = require("webpack-merge");
const { loadCss } = require("./webpack.parts");

module.exports = (...args) => {
  console.log({ args });
  return merge([
    ({
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
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
    },
    loadCss()),
  ]);
};
