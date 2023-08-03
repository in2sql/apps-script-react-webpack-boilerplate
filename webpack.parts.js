exports.loadJS = ({ paths, options }) => ({
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        include: [paths.src],
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            compact: false,
            extends: paths.babelConfig,
            plugins: [
              options.env.WEBPACK_SERVE &&
                options.mode === "development" &&
                require.resolve("react-refresh/babel"),
            ].filter(Boolean),
          },
        },
      },
    ],
  },
});

exports.loadSvg = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash].[ext]",
            },
          },
        ],
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
    ],
  },
});

exports.loadImages = ({ publicPath }) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
              publicPath: publicPath + "images",
            },
          },
        ],
      },
    ],
  },
});

exports.loadFonts = ({ publicPath }) => ({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
              publicPath: publicPath + "fonts",
            },
          },
        ],
      },
    ],
  },
});

exports.loadCss = () => ({
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 4,
              sourceMap: true,
              modules: {
                auto: true,
                localIdentName: "[name]_[local]--[hash:base64:3]",
              },
            },
          },
          {
            loader: "postcss-loader",
            ident: "postcss",
            options: {
              // sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              // sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});

exports.devServerConfig = () => ({
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
});
