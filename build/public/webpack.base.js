// Copyright 2019 underdolphin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/** @type import('webpack').Configuration */
"use strict";
const path = require("path");
const webpack = require("webpack");
const utils = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    app: "./src/public/index.ts"
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      vue: "vue/dist/vue.esm.js",
      style: path.resolve(__dirname, "../../src/public/style"),
      assets: path.resolve(__dirname, "../../src/public/assets")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          appendTsxSuffixTo: [/\.vue$/],
          configFile: "tsconfig.public.json"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: utils.vueLoaderOptions
      },
      {
        test: /\.(png|jpg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/img/[name].[ext]", context: "" }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: utils.scssLoaders
        })
      },
      {
        test: /\.pug$/,
        loader: "pug-plain-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/public/index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "style.[hash:5].css",
      disable: false,
      allChunks: true
    }),
    new VueLoaderPlugin()
  ]
};
