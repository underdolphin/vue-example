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
const merge = require("webpack-merge");
const common = require("./webpack.base.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[hash:5].js",
    path: "/dist"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../../dist"),
    publicPath: "/",
    hot: true,
    watchContentBase: true,
    inline: true,
    proxy: {
      "/api/": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"development"'
    })
  ]
});
