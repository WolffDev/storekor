module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'), //tells where the json file is



    /**
     * Sass task
     */
     sass: {
       dev: {
         options: {
           style: 'expanded',
           sourcemap: 'none',
         },
         files: {
           'compiled/style-human.css': 'sass/style.scss'
         }
       },
       dist: {
         options: {
           style: 'compressed',
           sourcemap: 'none',
         },
         files: {
           'compiled/style.css': 'sass/style.scss'
         }
       }
     },

     /**
      * jade
      */
     jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: {
          'index.html': 'index.jade'
        }
      }
    },

     /**
      * autoprefixer
      */

     autoprefixer: {
       options: {
         browser: ['last 2 versions']
       },
       // prefix all files
       multiple_files: {
         expand: true,
         flatten: true,
         src: 'compiled/*.css',
         dest: ''
       }
     },

    /**
     * Watch task
     */
     watch: {
       css: {
         files: '**/*.scss',
         tasks: ['sass', 'autoprefixer', 'jade']
       }
     }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default',['jade','watch']);


}
