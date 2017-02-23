app.controller('contactCtrl', ['$scope', 'QLNS', function($scope, QLNS){

    $scope.email = {
        ten: '',
        email: '',
        content: '',
        subject: ''
    };

    var refesh = function(){
        QLNS.employee.GET().then(function(res){
            //console.log(res.data);
            $scope.employees = res.data;
        });
    };
    refesh();

    // Lấy nhân viên theo id
    $scope.inputEmail = function(id){
        QLNS.employee.GET_WITH_ID(id).then(function(res){
            $scope.email.ten = res.data[0].TENNV;
            $scope.email.email = res.data[0].EMAIL;
            $scope.detailEmploy = res.data[0];
        });
    };

    $scope.sendMail = function(){
        QLNS.employee.SENDMAIL($scope.email).then(function(res){
            alert(res.data);
        });
    };

}]);