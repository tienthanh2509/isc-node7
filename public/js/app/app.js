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
            templateUrl: 'views/templates/role.html'
        })

        // Quản lý nhân viên
        .when('/employee/add', {
            templateUrl: '/views/templates/addEmployee.html'
        })
        .when('/employee/update', {
            templateUrl: '/views/templates/updateEmployee.html'
        })
        .when('/employee/show', {
            templateUrl: '/views/templates/showListEmployee.html'
        })

        // removed other routes ... *snip
        .otherwise({
            redirectTo: '/'
        });
}]);