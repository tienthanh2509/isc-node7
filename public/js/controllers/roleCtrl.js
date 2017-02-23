'use strict';

app.controller('roleCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    QLNS.role.GET().then(function(res){
        $scope.loading = false;
        $scope.roles = res.data;
    });
}]);