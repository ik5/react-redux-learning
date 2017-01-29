module.exports = {
	app: "dev/app.js",
	output: {
		path: 'src/',
		filename: "bundle.js"
	}
};

module: {
	loaders: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'pollyfill']
			}
		}
	]
}
