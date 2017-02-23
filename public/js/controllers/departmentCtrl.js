'use strict';

/**
 * Created by AnhDuc on 22/02/2017.
 * Updated by PhamThanh on 24/02/2017.
 */
app.controller('departmentCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {
    $scope.department = {
        TenPB: '',
        MoTa: '',
        TinhTrang: 1
    };

    QLNS.department.GET().then(function(res){
        $scope.loading = false;
        $scope.departments = res.data;
    });

    $scope.Save = function () {
        QLNS.department.POST($scope.department).then(function (res) {
            alert(res.data.message);
        })
    }
}]);