const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    module: {
        rules: [{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path]_[name].[ext]',
                        outputPath: 'fonts',
                        useRelativePath: true
                    }
                }
            ]
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path]_[name].[ext]',
                        outputPath: 'images',
                        useRelativePath: true
                    }
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                [{
                    loader: 'style-loader',
                    options: {
                        sourceMap: true
                    }
                }, 'vue-style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        minimize: true,
                        sourceMap: true
                    }
                }]
            ]
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader',]
        }, {
            test: /\.ts$/,
            use: 'ts-loader'
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }]
    },
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 80,
        host: '0.0.0.0'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}