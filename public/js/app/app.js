'use strict';

var app = angular.module("QuanLyNhanSu", ["ngRoute", "ngFileUpload"]);

// Route angular
app.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
    // Index
        .when('/', {
            templateUrl: '/views/templates/home.html'
        })

        // Quản lý phòng ban
        .when('/department', {
            templateUrl: '/views/templates/department/department.html'
        })
        .when('/department/add', {
            templateUrl: '/views/templates/department/add.html'
        })

        // Quản lý chức vụ
        .when('/role', {
            templateUrl: 'views/templates/role/role.html'
        })
        .when('/role/add', {
            templateUrl: 'views/templates/role/addRole.html'
        })

        // Quản lý nhân viên
        .when('/employee/list', {
            templateUrl: '/views/templates/employee/showListEmployee.html'
        })
        .when('/employee/add', {
            templateUrl: '/views/templates/employee/addEmployee.html'
        })
        .when('/employee/update', {
            templateUrl: '/views/templates/employee/updateEmployee.html'
        })
        .when('/employee/thumbnail', {
            templateUrl: 'views/templates/employee/contactEmployee.html'
        })

        // Chứng chỉ
        .when('/certificate', {
            templateUrl: 'views/templates/certificate/certificate.html'
        })
        .when('/certificate/add', {
            templateUrl: 'views/templates/certificate/add.html'
        })

        // Bằng cấp
        .when('/diploma', {
            templateUrl: 'views/templates/diploma/diploma.html'
        })
        .when('/diploma/add', {
            templateUrl: 'views/templates/diploma/add.html'
        })

        // removed other routes ... *snip
        .otherwise({
            redirectTo: '/'
        });
}]);