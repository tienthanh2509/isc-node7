'use strict';

app.controller('loginCtrl', ['$scope', 'QLNS', '$window', function($scope, QLNS, $window){

    $scope.admin = {
        TAIKHOAN: '',
        MATKHAU: ''
    };

    // login lấy giá trị TAIKHOAN vs MATKHAU từ form để xét qua API
    $scope.login = function(){
        QLNS.login.POST($scope.admin).then(function(res){
            if(res.data.status === '0'){
                $scope.err = res.data.comment;
            } else {
                $window.location.href = '/';
            }
        });
    };

    // phương thức trả thuộc tính showLogin về false là về trang đang nhập
    $scope.logout = function(){
      QLNS.logout.GET().then(function(){
          $window.location.href = '/login';
      });  
    };

}]);