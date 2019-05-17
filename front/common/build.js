const env = process.env.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
module.exports = {
    mode: env,
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        publicPath: './'
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
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            ak: 'nk4O8FeX4GgoCUrTyvOfn83fT6P01Lju'
        }),
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};;