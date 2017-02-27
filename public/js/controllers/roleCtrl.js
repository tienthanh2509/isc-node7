'use strict';

app.controller('roleCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    QLNS.role.GET().then(function(res){
        $scope.loading = false;
        $scope.roles = res.data;
    });

    $scope.role = {
        MaCV: "",
        TenCV: ''
    };

    $scope.Save = function () {
        QLNS.role.POST($scope.role).then(function (res) {
            alert(res.data.message);
        })
    }
}]);