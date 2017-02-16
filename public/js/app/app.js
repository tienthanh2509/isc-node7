var app = angular.module("QuanLyNhanSu", ["ngRoute"]);

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
        // removed other routes ... *snip
        .otherwise({
            redirectTo: '/'
        });
        //enable html5Mode for pushstate ('#'-less URLs)
        //$locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');
    }]);