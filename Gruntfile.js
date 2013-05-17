module.exports = function(grunt) {

    /* Configuration */

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {

            dist: {

                src: ['config/*.js', 'src/app.js', 'src/models/*.js'],
                dest: 'static/assets/js/codebrowser.js',
                options: {

                    separator: ';'

                }
            }
        },

        uglify: {

            dist: {

                files: {

                    'static/assets/js/codebrowser.js': ['static/assets/js/codebrowser.js']

                },

                options: {

                    report: 'min'

                }
            }
        },

        jshint: {

            src: {

                src: ['Gruntfile.js', 'web.js', 'config/*.js', 'src/**/*.js'],
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

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    /* Register tasks */

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', ['test', 'build']);
}
