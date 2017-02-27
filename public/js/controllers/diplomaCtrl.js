'use strict';

app.controller('diplomaCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {
    $scope.diploma = {
        MaBC: null,
        TenBC: ''
    };
    QLNS.diploma.GET().then(function (res) {
        $scope.loading = false;
        $scope.diplomas = res.data;
    });
    $scope.Save = function () {
        QLNS.diploma.POST($scope.diploma).then(function (res) {
            alert(res.data.message);
        })
    };
    $scope.setData = function (i) {
        var d = $scope.diplomas[i];

        $scope.diploma = {
            MaBC: d.MABANGCAP,
            TenBC: d.TENBANGCAP
        };
    };
    $scope.updateDiploma = function () {
        console.log($scope.diploma);

        $scope.saving = true;
        QLNS.diploma.updateDiploma($scope.diploma).then(function (response) {
            console.log(response);

            $scope.saving = false;
            $scope.diploma = {
                MaBC: null,
                TENBANGCAP: ''
            };


            $('#editModal').modal('hide');
        }, function (response) {
            // TODO: Thiết lập thông báo lỗi
            alert('Some thing went wrong!');
            $scope.saving = false;
        });
    };
}]);
