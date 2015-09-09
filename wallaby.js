/* eslint-disable */
var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (wallaby) {

  return {
    files: [{
      pattern: 'src/**/*.tsx',
      load: false
    }],
    tests: [{
      pattern: 'test/**/test-*.tsx',
      load: false
    }],
    preprocessors: wallabyWebpack(webpackConfig),
    // bootstrap: function () {
    //   window.__moduleBundler.loadTests();
    // }
  }
};
