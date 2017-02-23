app.controller('showListEmployeeCtrl', ['$scope', 'QLNS', function($scope, QLNS){

    //Lấy toàn bộ danh sách nhân viên
    $scope.getEmployee = function(){
         QLNS.employee.GET().then(function(res){
            $scope.employee = res.data;
            //console.log(res);
            //console.log(res.data[0])
        });
    };

    //Lấy toàn bộ các chứng chỉ
    $scope.getCertificate = function(){
        QLNS.certificate.GET().then(function(res){
            $scope.certificate = res.data;
            //console.log(res);
            //console.log(res.data[0])
        });
    };

    // Tìm kiếm theo tên nhân viên
    $scope.search = function(){
        QLNS.employee.GET_WITH_NAME($scope.searchName).then(function(res){
            $scope.employee = res.data;
        });
    };

    // Làm mới trang
    $scope.refesh = function(){
        $scope.getEmployee();
        $scope.getCertificate();
    };

    // load dữ liệu khi vào trang
    $scope.refesh();

}]);