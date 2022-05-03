const packageName = require('./package.json').name;

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    config.output = {
      library: 'reactApp', // 跟主应用中注册的保持一致
      libraryTarget: "umd",
      globalObject: 'window',
      // jsonpFunction: `webpackJsonp_${packageName}`,
    };
    // ...add your webpack config
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      }
      return config;
    };
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function (paths, env) {
    // ...add your paths config
    return paths;
  },
};
