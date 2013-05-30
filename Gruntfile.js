module.exports = function (grunt) {

    /* Task configuration */

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {

            src: {

                files: ['config/*.js', 'src/**/*.js'],
                tasks: ['jshint:src', 'build'],
                options: {

                    nospawn: true

                }
            }
        },

        concat: {

            dist: {

                src: ['config/*.js',
                      'src/app.js',
                      'src/models/*.js',
                      'src/collections/*.js',
                      'src/views/*.js',
                      'src/routers/*.js'],
                dest: 'static/assets/js/codebrowser.js',
                options: {

                    separator: ';\n\n'

                }
            }
        },

        uglify: {

            dist: {

                files: {

                    'static/assets/js/codebrowser-min.js': 'static/assets/js/codebrowser.js'

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

                src: 'spec/**/*.js',
                options: {

                    jshintrc: 'spec/jshint.json'

                }
            }
        },

        jasmine: {

            src: ['config/*.js', 'src/**/*.js'],
            options: {

                vendor: ['static/assets/js/jquery-2.0.0.min.js',
                         'static/assets/js/underscore-min.js',
                         'static/assets/js/backbone-min.js',
                         'static/assets/js/backbone-relational.js',
                         'static/assets/js/mustache.js',
                         'static/assets/js/ace/ace.js'],
                specs: 'spec/**/*-spec.js'

            }
        }
    });

    /* Load tasks */

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    /* Register tasks */

    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', ['test', 'build']);
}
