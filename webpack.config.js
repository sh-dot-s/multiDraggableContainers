var path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "public")
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'inline-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}