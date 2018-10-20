var path = require("path");
module.exports = {
    entry: ['whatwg-fetch', './js/pageapp.jsx'],
    output: {filename: "out.js", path: path.resolve(__dirname, "js")},
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    mode: "development", watch: true,
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        'es2015',
                        'stage-2',
                        'react'
                    ]
                }
            }
        },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
}