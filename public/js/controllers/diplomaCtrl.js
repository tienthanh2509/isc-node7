'use strict';

app.controller('diplomaCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    $scope.diploma = {
        TenBangcap: '',
    };
    QLNS.diploma.GET().then(function(res){
        $scope.loading = false;
        $scope.diplomas = res.data;
    });
}]);
