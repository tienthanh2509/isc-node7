/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

/**
 * Controller xử lý trạng thái navbar
 */
app.controller('headerNavbarController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
