'use strict';

app.controller('certificateCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    QLNS.certificate.GET().then(function(res){
        $scope.loading = false;
        $scope.certificates = res.data;
    });
}]);