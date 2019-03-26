"use strict";
const path = require('path')
const base = require('./webpack.base.conf');

module.exports = Object.assign({}, base, {
	mode: "development",
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
		host: "localhost",
		port: 8000,
		hot: true,
		open: true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:3001',//需要跨域的服务地址（后台服务地址）
				changeOrigin: true,//必须
				pathRewrite: {
					'^/api': ''
				},
				secure: false,          // 设置支持https协议的代理
			}
		}
	},
	plugins: [
		...base.plugins,
	]
});