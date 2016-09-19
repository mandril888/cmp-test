module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'dist/styles.css': 'sass/styles.scss',
        },
      },
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions'],
          }),
        ],
      },
      dist: {
        src: 'dist/*.css',
      },
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: 'sass/*.scss',
        tasks: ['sass', 'postcss:dist'],
      },
    },
  });

  grunt.registerTask('default', ['watch']);
};
