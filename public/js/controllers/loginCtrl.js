'use strict';

app.controller('loginCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    
    //$scope.showLogin = true; // Mở giá trị true và đóng giá trị false để dùng login
    $scope.showLogin = false;

    $scope.admin = {
        TAIKHOAN: '',
        MATKHAU: ''
    };

    // login lấy giá trị TAIKHOAN vs MATKHAU từ form để xét qua API
    $scope.login = function(){
        QLNS.administrator.LOGIN($scope.admin).then(function(res){
            if(res.data.TONTAI === 0){
                alert('Tài Khoản và mật khẩu không tồn tại');
            } else {
                $scope.administrator = res.data; 
                $scope.showLogin = false;
            }
        });
    };

    // phương thức trả thuộc tính showLogin về false là về trang đang nhập
    $scope.logout = function(){
        $scope.administrator = null;
        $scope.showLogin = true;
    };

}]);