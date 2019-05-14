
const mode = require('common/build.js');
const path = require('path');
const merge = require('webpack-merge');
const config = require('./src/config');
config(mode.mode === 'development')
module.exports = merge(mode, {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 80,
        host: '0.0.0.0'
    }
});