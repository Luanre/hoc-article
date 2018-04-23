var config = {
    entry: './src/index.tsx',
    output: {
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.tsx?/, loader: 'awesome-typescript-loader'}
        ]
    }
}

module.exports = config;