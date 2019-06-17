const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports ={
    entry: path.resolve(__dirname, './src/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",//打包后输出的文件名，[name]就是使用入口文件的key做名称
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    devtool: 'source-map'//打包模式
}
