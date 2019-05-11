const mode = process.env.NODE_ENV || 'development';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
const buildModules = {
    mode,
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
            ak: ''
        }),
        new VueLoaderPlugin()
    ]
};
({
    development: modeles => {
        modeles.devtool = 'eval';
        modeles.plugins.push(new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin());
        modeles.devServer = {
            contentBase: './dist',
            hot: true,
            port: 80,
            host: '0.0.0.0'
        };
    },
    production: modeles => { }
}[mode])(buildModules)
module.exports = buildModules;
