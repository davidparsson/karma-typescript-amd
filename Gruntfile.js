module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('typescript-tpm');

  grunt.initConfig({

    typescriptCompilerOptions: {
      module: 'amd',
      target: 'es5',
      basePath: '.',
      sourceMap: true,
      declaration: true
    },

    typescript: {
      options: '<%= typescriptCompilerOptions %>',
      unitTests: {
        src: ['test/**/*.ts'],
        dest: 'build/'
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      preCompiledTest: {
        src: ['build/test/**/*.js']
      },
      test: {
        src: ['test/**/*.ts'],
        options: {
          typescriptPreprocessor: {
            options: '<%= typescriptCompilerOptions %>'
          }
        }
      }
    },

    'tpm-install': {
      options: {
        dev: true
      },
      all: {
        src: 'package.json',
        dest: 'typings/'
      }
    }

  });

  grunt.registerTask('default', ['tpm-install', 'typescript', 'karma:preCompiledTest', 'karma:test'])
};
