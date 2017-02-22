/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

"use strict";

module.exports = function (grunt) {
    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    // Cấu hình tùy chỉnh & biến
    var resources = './src';
    // var bower = './bower_components';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' * app <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
        ' * Build on <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %>\n' +
        ' * Copyright 2017 Node7\n' +
        ' * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)\n' +
        ' */\n',
        // Tasks configuration
        sass: {
            dist: {
                options: {
                    //cacheLocation: '/tmp/.sass',
                    style: 'expanded'
                },
                files: {
                    'public/dist/css/app.css': resources + '/scss/app.scss'
                }
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= banner %>'
            },
            dist: {
                src: [
                    resources + '/js/helpers/smartresize.js',
                    resources + '/js/app.js'
                ],
                dest: 'public/dist/js/app.js'
            }
        },
        cssmin: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'public/dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/dist/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '<%= banner %>',
                    sourceMap: true,
                    mangle: false
                },
                files: [{
                    'public/dist/js/app.min.js': ['public/dist/js/app.js']
                }]
            }
        },
        watch: {
            sass_app: {
                files: [resources + '/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            cssmin_app: {
                files: ['public/dist/css/app.css'],
                tasks: ['cssmin'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            concat_app: {
                files: [resources + '/js/*.js'],
                tasks: ['concat'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            uglify_app: {
                files: ['public/dist/js/app.js'],
                tasks: ['uglify'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            }
        },
        clean: {
            dist: 'public/dist/'
        }
    });
    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Register task(s).
    grunt.registerTask('css', ['sass', 'cssmin']);
    grunt.registerTask('js', ['concat', 'uglify']);

    grunt.registerTask('default', ['css', 'js']);
};