const merge = require('webpack-merge');
const env = (process.env.NODE_ENV === 'development');
const config = require(env ? './webpack.dev' : './webpack.prod');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(config, {
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
        ]
    }
});
