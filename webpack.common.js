const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefresherPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	entry: {
		bundle: path.resolve(__dirname, 'src/index.tsx'),
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		clean: true,
		assetModuleFilename: '[name][ext]',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'build'),
		},
		port: 3000,
		open: true,
		hot: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack App',
			filename: 'index.html',
			template: path.resolve(__dirname, 'public/index.html'),
		}),
		new ReactRefresherPlugin(),
	],
};
