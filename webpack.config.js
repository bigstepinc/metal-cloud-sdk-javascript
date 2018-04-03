const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const recursiveKeys = require('recursive-keys');

const objPackageJSON = JSON.parse(fs.readFileSync("package.json"));

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
		"cluster": "",
		"fs-promise": ""
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
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			sourceMap: true,
			compress: {
				screw_ie8: true,
				unused: true,
				dead_code: true
			},
			mangle: {
				screw_ie8: true,
				except: recursiveKeys.dumpKeysRecursively(require("./index_webpack")).map(
					(strClassName) => {
						return strClassName.split(".").pop();
					}
				)
			},
			output: {
				screw_ie8: true,
				comments: false,
				preamble: `/**
					${objPackageJSON.name} v${objPackageJSON.version}
					${objPackageJSON.description}
					${objPackageJSON.homepage}
					\n\n${fs.readFileSync("./LICENSE.md")}
				*/`.replace(/\t+/g, "")
			}
		})
	]
};
