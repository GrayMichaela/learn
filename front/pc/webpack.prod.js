const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'vue-style-loader', 'css-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    target: 'web',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'pc',
            ak: ''
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'])
    ]
}