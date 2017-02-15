"use strict";

app.controller('FacultyController', function ($scope, facultyService) {
    facultyService.getAll().then(function (response) {
        // Data binding
        $scope.faculty_list = response.data;
    }, function (reason) {
        // TODO: Thiết lập thông báo lỗi
        alert('Some thing went wrong!');
    });

    $scope.delete = function (faculty_id) {
        if (confirm('Bạn có chắc không?'))
            facultyService.deleteById(faculty_id);
    };
});

app.controller('FacultyAddController', function ($scope, facultyService) {
    $scope.submitForm = function (isValid) {
        console.log($scope.faculty);
        var API_URL = '/api/v1/';

        $scope.saving = true;
        facultyService.addNew($scope.faculty)
            .then(function (response) {
                console.log(response);

                $scope.saving = false;
                $scope.faculty = {};

                $('#myModal').modal('hide');
            }, function (response) {
                // TODO: Thiết lập thông báo lỗi
                alert('Some thing went wrong!');
                $scope.saving = false;
            });
    };
});
