module.exports = function(config){
  config.set({
    files: [
      {pattern: 'src/**/*.ts', included: false},
      {pattern: 'test/**/*.ts', included: false},
      'test/main.js',
    ],
    basePath: './',
    singleRun: true,
    frameworks: ['jasmine', 'requirejs'],
    browsers: ['PhantomJS'],

    preprocessors: {
      '**/*.ts': ['typescript']
    },

    typescriptPreprocessor: {
      options: {
        module: 'amd',
        target: 'es5',
        sourceMap: 'inline'
      }
    }
  });
};
