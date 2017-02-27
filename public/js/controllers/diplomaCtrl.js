'use strict';

app.controller('diplomaCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    $scope.diploma = {
        TENBANGCAP: '',
    };
    QLNS.diploma.GET().then(function(res){
        $scope.loading = false;
        $scope.diplomas = res.data;
    });
    $scope.Save = function () {
        QLNS.diploma.POST($scope.diploma).then(function (res) {
            alert(res.data.message);
        })
    }
}]);
