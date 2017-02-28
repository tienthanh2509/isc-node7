'use strict';

app.controller('certificateCtrl', ['$scope', 'QLNS', function($scope, QLNS){
    $scope.certificate = {
        MaChungChi: null,
        TenChungChi: '',
        GhiChu: ''
    };
    
    QLNS.certificate.GET().then(function(res){
        $scope.loading = false;
        $scope.certificates = res.data;
    });

    //Lấy toàn bộ các chứng chỉ
    $scope.getListCertificate = function(){
        QLNS.certificate.GET().then(function(res){
            $scope.certificate = res.data;
            //console.log(res);
            //console.log(res.data[0])
        });
    };

    $scope.certificate = {
        TenChungChi: '',
        GhiChu: ''
    };

    // Làm mới trang
    $scope.refesh = function(){
        $scope.getListCertificate();
    };

    // Lưu
    $scope.Save = function(){     
        QLNS.certificate.POST($scope.certificate).then(function(res){
                alert(res.data);
                //clearCertificate();
            });
    };

    // Xóa
    $scope.delete = function(id){
        QLNS.certificate.DELETE(id).then(function(res){
            $scope.refesh();
        });
    };

    // Chi tiết chứng chỉ
    $scope.detail = function(id){
        QLNS.certificate.GET_WITH_IDCC(id).then(function(res){
            $scope.oneCertificate = res.data[0];
        });
    };    

    
    $scope.setData = function (i) {
        var d = $scope.certificates[i];

        $scope.certificate = {
            MaChungChi: d.MACHUNGCHI,
            TenChungChi: d.TENCHUNGCHI,
            GhiChu: d.GHICHU
        };
    };

    // Cập nhật
    $scope.updateCertificate = function () {
        console.log($scope.certificate);

        $scope.saving = true;
        QLNS.certificate.updateCertificate($scope.certificate).then(function (response) {
            console.log(response);

            $scope.saving = false;
            $scope.certificate = {
                MaChungChi: null,
                TenChungChi: '',
                GhiChu: ''
            };

            QLNS.certificate.getListCertificate().then(function (res) {
                $scope.loading = false;
                $scope.certificates = res.data;
            });

            $('#editModal').modal('hide');
        }, function (response) {
            // TODO: Thiết lập thông báo lỗi
            alert('Some thing went wrong!');
            $scope.saving = false;
        });
    };
}]);