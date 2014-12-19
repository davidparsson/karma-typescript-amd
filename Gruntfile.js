module.exports = function(grunt) {
  grunt.loadNpmTasks('typescript-tpm');
  grunt.initConfig({
    "tpm-install": {
      all: {
        src: "package.json",
        dest: "typings/"
      }
    }
  });
};
