"use strict";
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV.trim() !== 'production';
const resolve = dir => path.join(__dirname,'../',dir);
module.exports = {
	entry:{
		main:"./src/main.js",
	},
	output:{
		path:resolve("dist"),
		filename:"js/[name].[hash:6].js",
		publicPath:'/',
	},
	resolve:{
		extensions:['.js','.jsx','.scss'],
        alias: {
		    "@":resolve('src'),
            components:resolve("src/components")
        }
    },
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude:/node_modules/,
				use:["babel-loader?cacheDirectory"]	
			},
			{
				test:/\.html$/,
				loader:"html-loader"
            },
			{
				test:/\.(css|scss)$/,
				use:[
					isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
						  // url:false, //false  css中加载图片的路径将不会被解析 不会改变
						  // minimize:true, //压缩css
						  importLoaders: 1
						}
					},
					"sass-loader"
				]
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader:'url-loader',
				options: {
					limit: isDev ? 0 : 10000,
					name: 'images/[name].[hash:6].[ext]'
				},
			},
			{
				test:/\.(ttf|woff|svg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							name:'fonts/[name].[hash:6].[ext]'
						}
					}
				]
			},
        ]
	},
	plugins: [
		new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            favicon: 'public/favicon.ico',
			inject: true,
            minify: !isDev

		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash:6].css',
			chunkFilename: 'css/[id].[hash:6].css',
			disable: false,  //是否禁用此插件
			allChunks: true
		}),
	]
};