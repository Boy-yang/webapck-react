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
			'/api': 'http://localhost:8000',
			changeOrigin: true
		}
	},
	plugins: [
		...base.plugins,
	]
});