app.controller('showListEmployeeCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    $scope.phongban = 'Phòng/ Ban';
    $scope.chungchi = 'Chứng chỉ';
    $scope.loading = false;

    $scope.email = {
        ten: '',
        email: '',
        content: '',
        subject: ''
    };

    //Lấy toàn bộ danh sách nhân viên
    $scope.getEmployee = function(){
         QLNS.employee.GET().then(function(res){
            $scope.employee = res.data;
            $scope.loading = true;
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
    //Lấy danh sách nhân viên theo chứng chỉ
    $scope.listCertificate = function(id,name){
        $scope.renamePhongban(); //Rename dropdown box Phòng ban về mặc cmn định
        $scope.chungchi = name;
        QLNS.employee.GET_BY_CERTIFICATE(id).then(function(res){
            $scope.employee = res.data;
        });
    };

    //Lấy danh sách nhân viên theo phòng ban
    $scope.listEmployeeByDepartment = function(id,name){
        $scope.renameChungchi(); //Rename dropdown box Chứng chỉ về mặc định
        $scope.phongban = name;
        QLNS.employee.GET_BY_DEPARTMENT(id).then(function(res){
            $scope.employee = res.data;
        });
    };
    //Đổ danh sách phòng ban vào dropdown box phòng ban
     $scope.listDepartment= function(id){
        QLNS.department.GET().then(function(res){
            $scope.department = res.data;
        });
    };

    // Lấy mã nhân viên lưu vào biến toàn cục
    $scope.saveIdGobal = function(id){
        QLNS.values.SET_ID_EMPLOYEE(id);
    };

    // Làm mới trang
    $scope.refesh = function(){
        $scope.getEmployee();
        $scope.getCertificate();
        $scope.listDepartment();
    };
    
     //Rename dropdown box chứng chỉ và phòng ban
    $scope.renameChungchi = function(){
        if($scope.chungchi!='Chứng chỉ')
        {
            $scope.chungchi = 'Chứng chỉ';
        }
    };

    $scope.renamePhongban = function(){
        if($scope.phongban!='Phòng/ Ban')
        {
            $scope.phongban = 'Phòng/ Ban';
        }
    }
    // Xóa nhân viên
    $scope.delete = function(id){
        QLNS.employee.DELETE(id).then(function(res){
            $scope.refesh();
        });
    };

    // Chi tiết nhân viên
    $scope.detail = function(id){
        QLNS.employee.GET_WITH_ID(id).then(function(res){
            $scope.oneEmployee = res.data[0];
            $scope.email.ten = res.data[0].TENNV;
            $scope.email.email = res.data[0].EMAIL;
        });
    };

    // Gửi mail cho một nhân viên
    $scope.sendMail = function(){
        QLNS.employee.SENDMAIL($scope.email).then(function(res){
            alert(res.data);
            $scope.clearMail();
        });
    };

    // Làm mới Mail
    $scope.clearMail = function(){
        $scope.email = {
            ten: '',
            email: '',
            content: '',
            subject: ''
        };
    };

    // load dữ liệu khi vào trang
    $scope.refesh();

}]);