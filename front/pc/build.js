const mode = require('common/build.js');
const path = require('path');
const merge = require('webpack-merge');
module.exports = merge(mode, {
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 81,
        host: '0.0.0.0'
    }
});