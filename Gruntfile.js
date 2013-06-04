module.exports = function (grunt) {

    /* Task configuration */

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {

            src: {

                files: ['config/*.js', 'src/**/*.js', 'test/spec/**/*-spec.js', 'test/selenium/*.js'],
                tasks: ['jshint', 'build'],
                options: {

                    nospawn: true

                }
            }
        },

        concat: {

            dist: {

                src: ['config/*.js',
                      'src/app.js',
                      'src/helpers/*.js',
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

        handlebars: {

            template: {

                files: {

                    'static/assets/js/codebrowser-templates.js': 'src/templates/*.template'

                },

                options: {

                    namespace: 'Handlebars.templates',

                    processName: function (path) {

                        var split = path.split('/');
                        var file = split[split.length - 1];
                        var filename = file.split('.')[0];

                        return filename;
                    }
                }
            }
        },

        uglify: {

            dist: {

                files: {

                    'static/assets/js/codebrowser-min.js': 'static/assets/js/codebrowser.js',
                    'static/assets/js/codebrowser-templates-min.js': 'static/assets/js/codebrowser-templates.js'

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

            spec: {

                src: 'test/spec/**/*.js',
                options: {

                    jshintrc: 'test/spec/jshint.json'

                }
            },

            selenium: {

                src: 'test/selenium/*.js',
                options: {

                    jshintrc: 'test/selenium/jshint.json'

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
                         'static/assets/js/handlebars.runtime.js',
                         'static/assets/js/ace/ace.js',
                         'static/assets/js/codebrowser-templates-min.js'],
                specs: 'test/spec/**/*-spec.js',
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {

                    coverage: 'test/coverage/coverage.json',
                    report: 'test/coverage/'

                }
            }
        },

        connect: {

            server: {

                options: {

                    base: 'static'

                }
            }
        },

        webdriver: {

            dist: {

                url: 'http://localhost:8000/',
                tests: 'test/selenium/*.js'

            },

            options: {

                browser: 'phantomjs',
                reporter: 'specification'

            }
        }
    });

    /* Load tasks */

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-webdriver');

    /* Register tasks */

    grunt.registerTask('test', ['jshint', 'jasmine', 'connect', 'webdriver']);
    grunt.registerTask('build', ['concat', 'handlebars', 'uglify']);
    grunt.registerTask('default', ['test', 'build']);
}
