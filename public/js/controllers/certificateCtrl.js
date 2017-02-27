'use strict';

app.controller('certificateCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    QLNS.certificate.GET().then(function(res){
        $scope.loading = false;
        $scope.certificates = res.data;
    });

    $scope.certificate = {
        TenChungChi: '',
        GhiChu: ''
    };

    var clearCertificate = function(){
        $scope.certificate = {
        TenChungChi: '',
        GhiChu: ''
    };

    // Lưu
    $scope.Save = function(){     
        //console.log($scope.certificate);
        QLNS.certificate.POST($scope.certificate).then(function(res){
                alert(res.data);
                clearCertificate();
                refesh();
            });
        }
    };
}]);