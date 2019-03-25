"use strict";
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV.trim() !== 'production';
const resolve = dir => path.join(__dirname, '../', dir);
module.exports = {
	entry: {
		main: path.resolve(__dirname, "../src/main.js"),
	},
	performance: {
    // hints: "warning", // 枚举    hints: "error", // 性能提示中抛出错误
    maxAssetSize: 5000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 400000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
      // 提供资源文件名的断言函数
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
	output: {
		path: resolve("dist"),
		filename: isDev ? "js/[name].js" : "js/[name].[hash].js",
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader?cacheDirectory"]
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(css|scss)$/,
				use: [
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					"sass-loader"
				]
			},
			{
				test: /\.(ttf|woff|svg|bmp|png|gif|jpe?g)$/,
				loader: 'url-loader',
				options: {
					limit: isDev ? 0 : 8000,
					name: 'images/[name].[hash].[ext]'
				},
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			filename: 'index.html',
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
			inject: true,
			minify: !isDev
		}),
		new MiniCssExtractPlugin({
			filename: isDev ? 'css/[name].css' : 'css/[name].[hash].css',
			chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[hash].css',
			chunks: "all",
		}),
	]
};