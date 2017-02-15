/**
 * Controller xử lý trạng thái navbar
 */
app.controller('headerNavbarController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
