const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

module.exports = {
	entry: "./index_webpack",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "metal-cloud-sdk.min.js",
		libraryTarget: "umd"
	},
	externals: {
		"ws": "WebSocket", 
		"uws": "WebSocket", 
		"node-fetch": "fetch",
		"cluster": "null",
		"fs-promise": "null", 
		"fs-extra": "null", 
		"fs": "null", 
		"electron": "null", 
		"typescript": "null", 
		"typescript-parser": "null", 
		"worker_threads": "null", 
		"http": "null", 
		"https": "null", 
		"node-forge": "forge"
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "src"),
					path.resolve(__dirname, "examples"),
					path.resolve(__dirname, "node_modules", "jsonrpc-bidirectional")
				],
				exclude: {
					test: path.resolve(__dirname, "node_modules"),
					exclude: path.resolve(__dirname, "node_modules", "jsonrpc-bidirectional")
				},
				loader: "babel-loader",
				options: {
					presets: ["es2015", "stage-3"],
					plugins: [
						"async-to-promises"
					],
					babelrc: false
				}
			}
		],
	},	
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		})
	]
};
