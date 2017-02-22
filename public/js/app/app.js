var app = angular.module("QuanLyNhanSu", ["ngRoute", "ngFileUpload"]);

// Route angular
 app.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/templates/home.html',
            //controller:'createConstructionCtrl'
        })
        .when('/addEmployee', {
            templateUrl: 'views/templates/addEmployee.html',
            //controller:'createConstructionCtrl'
        })
        .when('/updateEmployee', {
            templateUrl: 'views/templates/updateEmployee.html',
            //controller:'createConstructionCtrl'
        })
        .when('/role', {
            templateUrl: 'views/templates/role.html',
            //controller:'createConstructionCtrl'
        })

        .when('/department', {
            templateUrl: 'views/templates/department.html',
            //controller:'createConstructionCtrl'
        })
        // removed other routes ... *snip
        .otherwise({
            redirectTo: '/'
        });
        //enable html5Mode for pushstate ('#'-less URLs)
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');
    }]);