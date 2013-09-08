module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    sassFile: 'sass/style.scss',
    cssFile: 'css/style.css',

    sass: {
      build: {
        options: {
          style: 'compressed'
        },

        files: {
          '<%= cssFile %>' : '<%= sassFile %>'
        }
      },

      debug: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= cssFile %>' : '<%= sassFile %>'
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
