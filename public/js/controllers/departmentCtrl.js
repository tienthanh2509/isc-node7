app.controller('departmentCtrl', ['$scope', 'Upload', '$timeout', '$http', 'QLNS', function($scope, Upload, $timeout, $http, QLNS){
    $scope.department = {
        Ma: '',
        TenPhongBan: '',
        MoTa: '',
        TinhTrang: ''
    };
    
    QLNS.department.GET().then(function(res){
        console.log(res);
    });
}]);