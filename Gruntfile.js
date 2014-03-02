module.exports = function (grunt) {

    /* Task configuration */

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {

            src: {

                files: ['Gruntfile.js', 'config/*.js', 'src/**/*.js', 'src/templates/**/*.template'],
                tasks: ['jshint:src', 'build']

            },

            test: {

                files: ['test/config/config.js', 'test/helpers/*.js', 'test/casperjs/*.js', 'test/spec/**/*-spec.js'],
                tasks: ['jshint:test', 'jshint:spec', 'jshint:casperjs']

            }
        },

        handlebars: {

            template: {

                files: {

                    'static/assets/js/codebrowser-templates.js': 'src/templates/**/*.template'

                },

                options: {

                    namespace: 'Handlebars.templates',

                    processName: function (path) {

                        // Use filename as the name of the template (View.template -> View)
                        var split = path.split('/');
                        var file = split[split.length - 1];
                        var filename = file.split('.')[0];

                        return filename;

                    }
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
                    'src/controllers/*.js',
                    'src/routers/*.js',
                    'src/raphael/*.js'],
                dest: 'static/assets/js/codebrowser.js',

                options: {

                    separator: ';\n\n'

                }
            },

            handlebars: {

                src: ['static/assets/js/codebrowser-templates.js',
                    'static/assets/js/codebrowser.js'],
                dest: 'static/assets/js/codebrowser.js',
                options: {

                    separator: ';\n\n'

                }
            },

            tests: {

                src: ['test/casperjs/*js', '!test/casperjs/tests-concat.js'],
                dest: 'test/casperjs/tests-concat.js'

            }
        },

        uglify: {

            dist: {

                files: {

                    'static/assets/js/codebrowser-templates-min.js': 'static/assets/js/codebrowser-templates.js',
                    'static/assets/js/codebrowser-min.js': 'static/assets/js/codebrowser.js'

                },

                options: {

                    report: 'min'

                }
            }
        },

        jshint: {

            srcXml: {

                src: ['Gruntfile.js', 'web.js', 'config/*.js', 'src/**/*.js'],
                options: {

                    force: true,
                    reporter: 'jslint',
                    reporterOutput: 'test_out/jshint/jslint_src-report.xml'

                }
            },

            testXml: {

                src: ['test/config/config.js', 'test/helpers/*.js'],
                options: {

                    jshintrc: 'test/jshint.json',
                    force: true,
                    reporter: 'jslint',
                    reporterOutput: 'test_out/jshint/jslint_test-report.xml'

                }
            },

            specXml: {

                src: 'test/spec/**/*.js',
                options: {

                    jshintrc: 'test/spec/jshint.json',
                    force: true,
                    reporter: 'jslint',
                    reporterOutput: 'test_out/jshint/jslint_spec-report.xml'

                }
            },

            casperjsXml: {

                src: ['test/casperjs/*.js', '!test/casperjs/tests-concat.js'],
                options: {

                    jshintrc: 'test/casperjs/jshint.json',
                    force: true,
                    reporter: 'jslint',
                    reporterOutput: 'test_out/jshint/jslint_casperjs-report.xml'

                }
            },

            src: {

                src: ['Gruntfile.js', 'web.js', 'config/*.js', 'src/**/*.js']

            },

            test: {

                src: ['test/config/config.js', 'test/helpers/*.js'],
                options: {

                    jshintrc: 'test/jshint.json'

                }
            },

            spec: {

                src: 'test/spec/**/*.js',
                options: {

                    jshintrc: 'test/spec/jshint.json'

                }
            },

            casperjs: {

                src: ['test/casperjs/*.js', '!test/casperjs/tests-concat.js'],
                options: {

                    jshintrc: 'test/casperjs/jshint.json'

                }
            },

            options: {

                jshintrc: 'jshint.json'

            }
        },

        jasmine: {

            src: ['config/*.js',
                'test/config/*.js',
                'test/helpers/fakeserver.js',
                'src/app.js',
                'src/helpers/*.js',
                'src/models/*.js',
                'src/collections/*.js',
                'src/views/*.js',
                'src/controllers/*.js',
                'src/routers/*.js',
                'src/raphael/*.js',
                'src/templates/**/*.template'],
            options: {

                vendor: [
                    'static/assets/js/jquery-2.0.3.min.js',
                    'static/assets/bootstrap/js/bootstrap.min.js',
                    'static/assets/js/d3.v3.min.js',
                    'static/assets/js/moment.min.js',
                    'static/assets/js/underscore-min.js',
                    'static/assets/js/backbone-min.js',
                    'static/assets/js/backbone-relational-min.js',
                    'static/assets/js/backbone.fetch-cache.min.js',
                    'static/assets/js/handlebars.runtime-min.js',
                    'static/assets/js/spin.min.js',
                    'static/assets/js/ace/ace.js',
                    'static/assets/js/difflib-min.js',
                    'static/assets/js/raphael-min.js',
                    'static/assets/js/codebrowser-templates-min.js',
                    'node_modules/sinon/pkg/sinon-1.7.3.js'
                ],
                specs: 'test/spec/**/*-spec.js',
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {

                    coverage: 'test/coverage/coverage.json',
                    report: {
                        type: 'cobertura',
                        options: {
                            dir: 'test_out/cobertura/'
                        }
                    }

                },
                junit: {
                    path: 'test_out/junit/'
                },
                keepRunner: true

            }
        },

        connect: {

            server: {

                options: {

                    base: 'static'

                }
            }
        },

        casperjs: {

            files: ['test/casperjs/tests-concat.js'],
            options: {
                includes: ['test/config/config.js', 'test/helpers/fakeserver.js'],
                xunit: 'test_out/casperjs_report.xml'
            }

        }
    });

    /* Load tasks */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-casperjs');

    /* Register tasks */
    grunt.registerTask('test', ['jshint', 'jasmine']);
    grunt.registerTask('integration-test', ['concat:tests', 'connect', 'casperjs']);
    grunt.registerTask('build', ['jshint','handlebars', 'concat:dist', 'concat:handlebars', 'uglify']);
    grunt.registerTask('default', ['test', 'build']);
}
