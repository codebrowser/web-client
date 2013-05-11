module.exports = function(grunt) {

    /* Configuration */

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {

            src: {

                src: ['Gruntfile.js', 'src/*.js'],
                options: {

                    jshintrc: 'jshint.json'
                }
            },

            tests: {

                src: 'spec/*.js',
                options: {

                    jshintrc: 'spec/jshint.json'
                }
            }
        },

        jasmine: {

            src : 'src/*.js',
            options : {

                specs : 'spec/*-spec.js'
            }
        }
    });

    /* Load tasks */

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    /* Register tasks */

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('default', 'test');
}
