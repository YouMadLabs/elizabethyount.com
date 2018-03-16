const serverConfig = require('./server');
const webpackConfig = require('./webpack');

const config = {
  server: serverConfig,
  webpack: webpackConfig
}

module.exports = config;
