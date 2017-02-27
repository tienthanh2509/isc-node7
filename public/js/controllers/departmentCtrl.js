'use strict';

/**
 * Created by AnhDuc on 22/02/2017.
 * Updated by PhamThanh on 24/02/2017.
 */
app.controller('departmentCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {
    $scope.department = {
        MaPB: null,
        TenPB: '',
        MoTa: '',
        TinhTrang: 1
    };

    QLNS.department.getDepartmentWithLeader().then(function (res) {
        $scope.loading = false;
        $scope.departments = res.data;
    });

    $scope.Save = function () {
        QLNS.department.POST($scope.department).then(function (res) {
            alert(res.data.message);
        })
    };

    $scope.setData = function (i) {
        var d = $scope.departments[i];

        $scope.department = {
            MaPB: d.MAPB,
            TenPB: d.TENPHONGBAN,
            MoTa: d.MOTA,
            TinhTrang: d.TINHTRANG
        };
    };

    $scope.updateDepartment = function () {
        console.log($scope.department);

        $scope.saving = true;
        QLNS.department.updateDepartment($scope.department).then(function (response) {
            console.log(response);

            $scope.saving = false;
            $scope.department = {
                MaPB: null,
                TenPB: '',
                MoTa: '',
                TinhTrang: 1
            };

            QLNS.department.getDepartmentWithLeader().then(function (res) {
                $scope.loading = false;
                $scope.departments = res.data;
            });

            $('#editModal').modal('hide');
        }, function (response) {
            // TODO: Thiết lập thông báo lỗi
            alert('Some thing went wrong!');
            $scope.saving = false;
        });
    };
}]);