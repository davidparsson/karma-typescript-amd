module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('typescript-tpm');

  grunt.initConfig({

    "typescript": {
      options: {
        module: "amd",
        target: "es5",
        basePath: ".",
        sourceMap: true,
        declaration: true
      },
      unitTests: {
        src: ["test/**/*.ts"],
        dest: "build/"
      }
    },

    "tpm-install": {
      all: {
        src: "package.json",
        dest: "typings/"
      }
    }

  });

  grunt.registerTask("default", ["tpm-install", "typescript"])
};
