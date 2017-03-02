'use strict';

app.controller('certificateCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {
    QLNS.certificate.GET().then(function (res) {
        $scope.loading = false;
        $scope.certificates = res.data;
    });

    //Lấy toàn bộ các chứng chỉ
    $scope.getCertificate = function () {
        QLNS.certificate.GET().then(function (res) {
            $scope.certificate = res.data;
            //console.log(res);
            //console.log(res.data[0])
        });
    };

    $scope.certificate = {
        TenChungChi: '',
        GhiChu: ''
    };

    // Làm mới trang
    $scope.refesh = function () {
        $scope.getCertificate();
    };

    // Lưu
    $scope.Save = function () {
        //console.log($scope.certificate);
        QLNS.certificate.POST($scope.certificate).then(function (res) {
            alert(res.data);
            //clearCertificate();
        });
    };

    // Xóa
    $scope.delete = function (id) {
        QLNS.certificate.DELETE(id).then(function (res) {
            $scope.refesh();
        });
    };

    // Chi tiết chứng chỉ
    $scope.detail = function (id) {
        QLNS.certificate.GET_WITH_IDCC(id).then(function (res) {
            $scope.oneCertificate = res.data[0];
        });
    };
}]);