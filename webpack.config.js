import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


export default{
    "entry": "./src/main.jsx",
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
              test: /\.(jpe?g|jpeg|jpg|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
              loader: 'file-loader' 
            },
            {
                test: /\.(jsx|js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }

        ]

    },
    "output": {
        path: path.resolve(__dirname, "webpack-dist"),
        filename: "bundle.js",
        // mode: "production"
    },
    plugins: [new HtmlWebpackPlugin()],


}