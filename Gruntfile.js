module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');

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
    browserify: {
      dist: {
        files: {
          'bundle.js': ['app/app.js'],
        },
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
      js: {
        files: ['app/**/*.js'],
        tasks: ['browserify'],
      },
    },
  });

  grunt.registerTask('default', ['watch']);
};
