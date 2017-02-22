'use strict';

/**
 * Created by AnhDuc on 22/02/2017.
 */
app.controller('departmentCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {
    $scope.department = {
        TenPB: '',
        MoTa: '',
        TinhTrang: 1
    };

    $scope.Save = function () {
        QLNS.department.POST($scope.department).then(function (res) {
            alert(res.data.message);
        })
    }
}]);