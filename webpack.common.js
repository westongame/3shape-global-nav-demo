const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'eslint-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};
