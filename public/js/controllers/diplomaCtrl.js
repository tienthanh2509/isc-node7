'use strict';

app.controller('diplomaCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    $scope.diploma = {
        TENBANGCAP: '',
    };
    QLNS.diploma.GET().then(function(res){
        $scope.loading = false;
        $scope.diplomas = res.data;
    });
    $scope.Save = function () {
        QLNS.diploma.POST($scope.diploma).then(function (res) {
            alert(res.data.message);
        })
    };

    // Làm mới trang
    $scope.refesh = function(){
        QLNS.certificate.GET().then(function(res){
            $scope.loading = false;
            $scope.certificates = res.data;
        });
    };

    // Xóa
    $scope.delete = function(id){
        QLNS.diploma.DELETE(id).then(function(res){
            $scope.refesh();
        });
    };

    // Chi tiết bằng cấp
    $scope.detail = function(id){
        QLNS.diploma.GET_WITH_IDBC(id).then(function(res){
            $scope.oneDiploma = res.data[0];
        });
    };    

}]);
