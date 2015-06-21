var webpackConfig = require('../webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS', 'Chrome'],
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      { pattern: 'test-context.js', watched: false },
    ],
    frameworks: ['jasmine'],
    reporters: ['dots', 'html'],
    htmlReporter: {
      outputDir: 'test/report'
    },
    preprocessors: {
      'test-context.js': ['webpack'],
    },
    webpack: {
      resolve: webpackConfig.resolve,
      module: {
        loaders: [].concat(webpackConfig.module.loaders),
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
