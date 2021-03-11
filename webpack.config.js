const path = require('path')
const config = {
    entry: [
        './src/GhostLoader.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'GhostLoader.js',
        library: 'GhostLoader',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: 'babel-loader',
                test: /\.(js|jsx)$/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: '_'
        }
    }

}

module.exports = config