"use strict";

app.controller('StudentController', function ($scope, studentService) {
    studentService.getData().then(function (response) {
        // // Xử lý dữ liệu lấy được từ server
        // angular.forEach(response.data, function (value, key) {
        //
        // });

        // Data binding
        $scope.student_list = response.data;
    }, function (reason) {
        // TODO: Thiết lập thông báo lỗi
    });
});
