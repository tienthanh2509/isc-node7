'use strict';

app.controller('diplomaCtrl', ['$scope', 'QLNS', '$window', function($scope, QLNS, $window) {
    $scope.diploma = {
        MaBC: null,
        TenBC: ''
    };
    $scope.refresh = function () {
        QLNS.diploma.GET().then(function (res) {
            $scope.loading = false;
            $scope.diplomas = res.data;
        });
    };
    $scope.Save = function () {
        QLNS.diploma.POST($scope.diploma).then(function (res) {
            $window.location.href = '#!/diploma';
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

        $scope.loading = true;
        QLNS.diploma.updateDiploma($scope.diploma).then(function (response) {
            console.log(response);

            $scope.loading = false;
            $scope.diploma = {
                MaBC: null,
                TENBANGCAP: ''
            };

            $scope.refresh();

            $('#editModal').modal('hide');
        }, function (response) {
            // TODO: Thiết lập thông báo lỗi
            alert('Some thing went wrong!');
            $scope.loading = false;
        });
    };

    $scope.refresh();
}]);
