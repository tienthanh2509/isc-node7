'use strict';

var app = angular.module("QuanLyNhanSu", ["ngRoute", "ngFileUpload"]);

// Route angular
app.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider
    // Index
        .when('/', {
            templateUrl: 'views/templates/home.html',
            //controller:'createConstructionCtrl'
        })

        // Quản lý phòng ban
        .when('/department', {
            templateUrl: 'views/templates/department.html',
            //controller:'createConstructionCtrl'
        })

        // Quản lý chức vụ
        .when('/role', {
            templateUrl: 'views/templates/role.html',
            //controller:'createConstructionCtrl'
        })

        // Quản lý nhân viên
        .when('/employee/add', {
            templateUrl: 'views/templates/addEmployee.html',
            //controller:'createConstructionCtrl'
        })
        .when('/employee/update', {
            templateUrl: 'views/templates/updateEmployee.html',
            //controller:'createConstructionCtrl'
        })
        .when('/employee/show', {
            templateUrl: 'views/templates/showListEmployee.html',
            //controller:'createConstructionCtrl'
        })

        // removed other routes ... *snip
        .otherwise({
            redirectTo: '/'
        });
}]);