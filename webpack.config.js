//Konfiguracja Webpack
const path = require("path");
module.exports = {
    entry: "./js/app.jsx",
    output: {
        path: path.resolve("js"),
        filename: "out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                //sudo npm install style-loader css-loader --save-dev
                //sudo npm install node-sass sass-loader --save-dev
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']

            }
        ]
    }
}

//dev server
//sudo npm install webpack-dev-server --save-dev

//localinstall webpack
//sudo npm install --save-dev webpack
//launch
//./node_modules/.bin/webpack-dev-server --inline --hot
