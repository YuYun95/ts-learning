const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts', // 入口文件
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'] // 引入文件时不用写后缀名 import xxx from './index'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/ // 排除node_module下的文件
        }]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: './dist', // 本地开发运行基于哪个文件作为跟目录
        stats: 'errors-only', // 本地服务打印哪些信息
        compress: false,
        host: 'localhost',
        port: 8089
    },
    plugins: [
        // 编译前删除文件
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        // 配置模板
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ]
}