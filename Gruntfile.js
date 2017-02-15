/*
 * Copyright (c) 2017 PT Studio
 *
 * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)
 */

"use strict";

module.exports = function (grunt) {
    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    // Cấu hình tùy chỉnh & biến
    var resources = './resources/assets';
    var bower = './bower_components';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' * app <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
        ' * Build on <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %>\n' +
        ' * Copyright 2017\n' +
        ' * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)\n' +
        ' */\n',
        // Tasks configuration
        sass: {
            dist: {
                options: {
                    cacheLocation: '/tmp/.sass',
                    style: 'expanded'
                },
                files: {
                    'public/assets/css/edusoft.css': resources + '/stylesheets/edusoft.scss'
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
                    resources + '/javascripts/app-utils.js',
                    resources + '/javascripts/navbar.js',
                    resources + '/javascripts/app.js',
                    resources + '/javascripts/edusoft/services/facultyService.js',
                    resources + '/javascripts/edusoft/services/studentService.js',
                    resources + '/javascripts/edusoft/services/subjectService.js',
                    resources + '/javascripts/edusoft/controllers/headerNavbarController.js',
                    resources + '/javascripts/edusoft/controllers/facultyController.js',
                    resources + '/javascripts/edusoft/controllers/studentController.js',
                    resources + '/javascripts/edusoft/controllers/subjectController.js'
                ],
                dest: 'public/assets/js/edusoft.js'
            }
        },
        cssmin: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'public/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/assets/css',
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
                    'public/assets/js/edusoft.min.js': ['public/assets/js/edusoft.js']
                }]
            }
        },
        copy: {
            img: {
                expand: true,
                cwd: resources + '/images/',
                src: '**',
                dest: 'public/assets/img/'
            }
        },
        watch: {
            sass_app: {
                files: [resources + '/stylesheets/*.scss'],
                tasks: ['sass'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            cssmin_app: {
                files: ['public/assets/css/edusoft.css'],
                tasks: ['cssmin'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            concat_app: {
                files: [resources + '/javascripts/*.js'],
                tasks: ['concat'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            uglify_app: {
                files: ['public/assets/js/edusoft.js'],
                tasks: ['uglify'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            }
        },
        clean: {
            dist: 'public/assets/'
        }
    });
    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Register task(s).
    grunt.registerTask('css', ['sass', 'cssmin']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('bundle', ['copy']);

    grunt.registerTask('default', ['css', 'js', 'bundle']);
};