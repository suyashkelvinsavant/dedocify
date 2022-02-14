const webpack = require('webpack');
module.exports = {
    plugins:[
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    resolve: {
        fallback:
        {
            "assert": require.resolve("assert/"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer")
        }
    },
    node:{
        Buffer: true
    }
};