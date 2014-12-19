module.exports = function(config){
  config.set({
    files: ['test/**/*.ts'],
    basePath: './',
    singleRun: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],

    preprocessors: {
      '**/*.ts': ['typescript']
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-typescript-preprocessor'
    ]

  });
};

