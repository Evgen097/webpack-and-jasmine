
module.exports = {
    entry: './src/index.js',
    output: {
        filename: './build/index.js'
    },
    devServer: {
        stats: {
            children: false
        },
        port: 8080
    },
    devtool: '# eval-source-map',


}















