'use strict';

app.controller('updateEmployeeCtrl', ['$scope', 'QLNS', function($scope, QLNS){

    // Thuộc tính nhân viên
    $scope.employee = {
        HONV: '',
        TENNV: '',
        NGAYSINH: '',
        DIACHI: '',
        GIOITINH: '',
        SODIENTHOAI: '',
        EMAIL: '',
        MaSoBaoHiem: '',
        TrinhDo: '',
        TONGIAO: '',
        ChungChiChuyenNghanh: '',
        ChungChiAnhVan: '',
        HINHANH: '',
        CVPath: '',
        ScoreTablePath: '',
        CertificatePath: '',
        HouseholdPath: '',
        DiplomaPath: '',
        HealthCertificationPath: '',
        TENPHONGBAN: '',
        TENCHUVU: '',
        MAPB: '',
        MACV: '',
        maChuyenNghanh: '',
        ChuyenNghanh: '',
        TuNgay: '',
        DenNgay: '',
        MANV: '',
        MOTA: '',
        TINHTRANG: '',
        CREATED_AT: '',
        UPDATED_AT: ''
    };

    // Biến tạm
    $scope.gioitinh = null;

    // Lấy nhân viên theo ID
    $scope.getEmployee = function(){
        QLNS.employee.GET_DE_ROLE(QLNS.values.GET_ID_EMPLOYEE()).then(function(res){
            $scope.employee = res.data[0];
            if(res.data[0].GIOITINH === 1){
                $scope.gioitinh = "Nam";
            } else if (res.data[0].GIOITINH === 0){
                $scope.gioitinh = "Nữ";
            }
        });
    };

    // Lưu chỉnh sửa nhân viên
    $scope.Save = function(){
        QLNS.employee.UPDATE($scope.employee).then(function(res){
            alert(res.data);
        });
    };

    // Xử lý giới tính
    $scope.selectGender = function(genderName){
        if(genderName === 'Nam'){
            $scope.employee.GIOITINH = 1;
            $scope.gioitinh = genderName;
        } else if(genderName === 'Nữ'){
            $scope.employee.GIOITINH = 0;
            $scope.gioitinh = genderName;
        }
    };

    // Tải lên thông tin của nhân viên
    $scope.refresh = function(){
        $scope.getEmployee();
    };
    $scope.refresh();

    // Image Employee
    $scope.$watch('imgEmploys', function () {
        //console.log($scope.imgEmploys);  
        $scope.uploadImage($scope.imgEmploys);
    });
    $scope.$watch('imgEmploy', function () {
        if ($scope.imgEmploy != null) {
            //console.log($scope.files);
            $scope.imgEmploys = [$scope.imgEmploy]; 
        }
    });
    $scope.logimg = '';

    // CV
    $scope.$watch('CVs', function () {
        //console.log($scope.CVs[0].name);   
        $scope.uploadCV($scope.CVs);   
    });
    $scope.$watch('CV', function () {
        if ($scope.CV != null) {
            //console.log($scope.files);
            $scope.CVs = [$scope.CV]; 
        }
    });
    $scope.logCV = '';

    // Bảng điểm
    $scope.$watch('ScoreTables', function () {
        //console.log($scope.ScoreTables); 
        $scope.uploadScoreTable($scope.ScoreTables);
    });
    $scope.$watch('ScoreTable', function () {
        if ($scope.ScoreTable != null) {
            //console.log($scope.files);
            $scope.ScoreTables = [$scope.ScoreTable]; 
        }
    });
    $scope.logScoreTable = '';

    // Chứng chỉ
    $scope.$watch('Certificates', function () {
        //console.log($scope.Certificates);
        $scope.uploadCertificate($scope.Certificates);
    });
    $scope.$watch('Certificate', function () {
        if ($scope.Certificate != null) {
            //console.log($scope.files);
            $scope.Certificates = [$scope.Certificate]; 
        }
    });
    $scope.logCertificate = '';

    // Hộ khẩu
    $scope.$watch('Households', function () {
        //console.log($scope.Households);
        $scope.uploadHousehold($scope.Households);
    });
    $scope.$watch('Household', function () {
        if ($scope.Household != null) {
            //console.log($scope.files);
            $scope.Households = [$scope.Household]; 
        }
    });
    $scope.logHousehold = '';

    // Bằng tốt nghiệp
    $scope.$watch('Diplomas', function () {
        //console.log($scope.Diplomas); 
        $scope.uploadDiploma($scope.Diplomas);
    });
    $scope.$watch('Diploma', function () {
        if ($scope.Diploma != null) {
            //console.log($scope.files);
            $scope.Diplomas = [$scope.Diploma]; 
        }
    });
    $scope.logDiploma = '';

    // Giấy khám sức khỏe
    $scope.$watch('HealthCertifications', function () {
        //console.log($scope.HealthCertifications);
        $scope.uploadHealthCertification($scope.HealthCertifications);
    });
    $scope.$watch('HealthCertification', function () {
        if ($scope.HealthCertification != null) {
            //console.log($scope.files);
            $scope.HealthCertifications = [$scope.HealthCertification]; 
        }
    });
    $scope.logHealthCertification = '';

    // phương thức upload ảnh vào thư mục uploads/employeeImage
    $scope.uploadImage = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/api/uploadImage',
                    data: {
                      file: file  
                    }
                }).then(function (resp) {
                    //console.log(resp.data);
                    $scope.employee.HINHANH = resp.data.originalname;
                    $timeout(function() {
                        $scope.logimg = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.logimg;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.logimg = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.logimg;
                });
              }
            }
        }
    };

    // phương thức upload CV vào thư mục uploads/CV
    $scope.uploadCV = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/api/uploadCV',
                    data: {
                      file: file  
                    }
                }).then(function (resp) {
                    $scope.employee.CVPath = resp.data.path;
                    $timeout(function() {
                        $scope.logCV = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.logCV;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.logCV = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.logCV;

                      console.log($scope.logCV);
                });
              }
            }
        }
    };

    // phương thức upload ảnh vào thư mục uploads/ScoreTable
    $scope.uploadScoreTable = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/api/uploadScoreTable',
                    data: {
                      file: file  
                    }
                }).then(function (resp) {
                    $scope.employee.ScoreTablePath = resp.data.path;
                    $timeout(function() {
                        $scope.logScoreTable = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.logScoreTable;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.logScoreTable = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.logScoreTable;
                });
              }
            }
        }
    };

    // phương thức upload ảnh vào thư mục uploads/Certificate
    $scope.uploadCertificate = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/api/uploadCertificate',
                    data: {
                      file: file  
                    }
                }).then(function (resp) {
                    $scope.employee.CertificatePath = resp.data.path;
                    $timeout(function() {
                        $scope.logCertificate = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.logCertificate;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.logCertificate = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.logCertificate;
                });
              }
            }
        }
    };

    // phương thức upload ảnh vào thư mục uploads/Household
    $scope.uploadHousehold = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/api/uploadHousehold',
                    data: {
                      file: file  
                    }
                }).then(function (resp) {
                    $scope.employee.HouseholdPath = resp.data.path;
                    $timeout(function() {
                        $scope.logHousehold = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.logHousehold;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.logHousehold = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.logHousehold;
                });
              }
            }
        }
    };

    // phương thức upload ảnh vào thư mục uploads/Diploma
    $scope.uploadDiploma = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/api/uploadDiploma',
                    data: {
                      file: file  
                    }
                }).then(function (resp) {
                    $scope.employee.DiplomaPath = resp.data.path;
                    $timeout(function() {
                        $scope.logDiploma = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.logDiploma;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.logDiploma = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.logDiploma;
                });
              }
            }
        }
    };

    // phương thức upload ảnh vào thư mục uploads/HealthCertification
    $scope.uploadHealthCertification = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!file.$error) {
                Upload.upload({
                    url: '/api/uploadHealthCertification',
                    data: {
                      file: file  
                    }
                }).then(function (resp) {
                    $scope.employee.HealthCertificationPath = resp.data.path;
                    $timeout(function() {
                        $scope.logHealthCertification = 'file: ' +
                        resp.config.data.file.name +
                        ', Response: ' + JSON.stringify(resp.data) +
                        '\n' + $scope.logHealthCertification;
                    });
                }, null, function (evt) {
                    var progressPercentage = parseInt(100.0 *
                    		evt.loaded / evt.total);
                    $scope.logHealthCertification = 'progress: ' + progressPercentage + 
                    	'% ' + evt.config.data.file.name + '\n' + 
                      $scope.logHealthCertification;
                });
              }
            }
        }
    };

}]);