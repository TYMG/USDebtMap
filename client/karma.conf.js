// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-jquery','jasmine', '@angular/cli'],
    files: [
      {pattern: '../node_modules/jquery/dist/jquery.js', watched: false, served: true, included: true},
      {pattern: '../node_modules/jasmine/bin/jasmine.js', watched: false, served: true, included: true},
      {pattern: '../node_modules/jasmine-jquery/lib/jasmine-jquery.js', watched: false, served: true, included: true},
      {pattern: 'src/test/ts/**/*.ts', watched: true, served: true, included: false},

      // fixtures
      {pattern: 'src/test/html/**/*.html', watched: true, served: true, included: false}
    ],
    plugins: [
      'karma-jquery',
      'karma-jasmine',
      'karma-jasmine-jquery',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-coverage-istanbul-reporter',
      '@angular/cli/plugins/karma'
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },     
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
