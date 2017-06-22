/**
 * @file webpack.config.js
 * @author yunxiange@gmail.com
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: {
		app: './source/app.js',
		bundle: [
			'react', 'react-dom'
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'build'),
		chunkFilename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.json']
	},
	module: {
		rules: [{
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'react-hot-loader'
			}, {
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['transform-runtime']
				}
			}]
		}]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'index.html'),
		}),
		new OpenBrowserPlugin({
			url: 'http://localhost:3000'
		})
	],
	devServer: {
		contentBase: './',
		historyApiFallback: true,
		hot: true,
		host: '0.0.0.0'
	}
};
