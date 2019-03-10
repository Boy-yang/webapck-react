"use strict";
const base = require('./webpack.base.conf');
module.exports = Object.assign({},base,{
	mode:"development",
	devServer:{
		host:"localhost",
		port:8008,
		hot:true,
		open:true
	},
	plugins:[
		...base.plugins,
	]
});
