module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        path: require.resolve('path-browserify'),  // Added this
        os: require.resolve('os-browserify'),  // And this
      },
    },
  },
};
