/*
 * Copyright (c) 2017 PT Studio
 *
 * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)
 */

/**
 * Created by Capricorn on 09/02/2017.
 */

"use strict";

app.controller('SubjectController', function ($scope, subjectService) {
    subjectService.getData().then(function (response) {
        // // Xử lý dữ liệu lấy được từ server
        // angular.forEach(response.data, function (value, key) {
        //
        // });

        // Data binding
        $scope.subject_list = response.data;
    }, function (reason) {
        // TODO: Thiết lập thông báo lỗi
    });
});