app.controller('roleCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    QLNS.role.GET().then(function(res){
        console.log(res);
    });
}]);