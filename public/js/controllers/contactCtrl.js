'use strict';

app.controller('contactCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {

    $scope.email = {
        ten: '',
        email: '',
        content: '',
        subject: ''
    };

    // Làm mới trang
    $scope.refesh = function () {
        QLNS.employee.GET_EMP_DEP().then(function (res) {
            //console.log(res.data);
            $scope.employees = res.data;
        });
    };
    $scope.refesh();

    // Lấy nhân viên theo id
    $scope.inputEmail = function (id) {
        QLNS.employee.GET_WITH_ID(id).then(function (res) {
            $scope.email.ten = res.data[0].TENNV;
            $scope.email.email = res.data[0].EMAIL;
            $scope.detailEmploy = res.data[0];
        });
    };

    // Gửi mail cho một nhân viên
    $scope.sendMail = function () {
        QLNS.employee.SENDMAIL($scope.email).then(function (res) {
            alert(res.data);
            $scope.clearMail();
        });
    };

    // Tìm kiếm theo tên nhân viên
    $scope.search = function () {
        QLNS.employee.GET_WITH_NAME($scope.searchName).then(function (res) {
            $scope.employees = res.data;
        });
    };

    // Làm mới Mail
    $scope.clearMail = function () {
        $scope.email = {
            ten: '',
            email: '',
            content: '',
            subject: ''
        };
    };

}]);