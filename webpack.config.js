const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: `${_env.project}/assets/js/[name].js`,
      publicPath: ""
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProduction ? "production" : "development"
            }
          }
        },
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader", "sass-loader"
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve("file-loader"),
          options: {
            name: "static/media/[name].[hash:8].[ext]"
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: `${_env.project}/assets/css/[name].css`,
          chunkFilename: `${_env.project}/assets/css/[name].chunk.css`
        }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        inject: true
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProduction ? "production" : "development"
        )
      }),
      isProduction && sentryWebpackPlugin({
        org:  "cityofdetroit",
        project: "myhomeinfo",
  
        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and need `project:releases` and `org:read` scopes
        authToken: process.env.SENTRY_AUTH_TOKEN,
      }),
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false,
              ascii_only: true
            },
            warnings: false
          }
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: 10,
        maxAsyncRequests: 10,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `${cacheGroupKey}.${packageName.replace("@", "")}`;
            }
          },
          common: {
            minChunks: 2,
            priority: -10
          }
        }
      },
      runtimeChunk: "single"
    },
    devServer: {
      port: 3000,
      compress: true,
      historyApiFallback: true,
      open: true,
      client: {
        overlay: true
      }
    }
  };
};