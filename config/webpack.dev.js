const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        port: 4500,
        host: '0.0.0.0',
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
