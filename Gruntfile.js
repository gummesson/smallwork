module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sassfile: 'sass/style.scss',
    cssfile: 'css/style.css',

    sass: {
      build: {
        options: {
          style: 'compressed'
        },

        files: {
          '<%= cssfile %>' : '<%= sassfile %>'
        }
      },

      debug: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= cssfile %>' : '<%= sassfile %>'
        }
      }
    },

    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass:debug']
      }
    }
  });

  grunt.registerTask('default', ['sass:build']);
  grunt.registerTask('dev', ['sass:debug', 'watch']);

};
