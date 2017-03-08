'use strict';

app.controller('certificateCtrl', ['$scope', 'QLNS', '$window', function($scope, QLNS, $window) {
    // Làm mới trang
    $scope.refresh = function () {
        $scope.loading = null;
        $scope.certificates = null;

        // Clear biến tạm
        $scope.certificate = {
            MaChungChi: null,
            TenChungChi: '',
            GhiChu: ''
        };

        // Truy vấn API
        QLNS.certificate.GET().then(function (res) {
            $scope.loading = false;
            $scope.certificates = res.data;
        });
    };


    // Lưu
    $scope.Save = function () {
        QLNS.certificate.POST($scope.certificate).then(function (res) {
            $window.location.href = '#!/certificate';
            alert(res.data);
        });
    };

    // Xóa
   $scope.delete = function (id) {
        console.log('Xóa chứng chỉ', id, $scope.certificate);

        $scope.loading = true;
        QLNS.certificate.DELETE(id).then(function (response) {
            console.log(response);

            // Tải lại nội dung trang
            $scope.loading = false;
            $scope.refresh();

            // Đóng modal
            $('#deleteModal').modal('hide');
        }, function (response) {
            // TODO: Thiết lập thông báo lỗi
            alert('Some thing went wrong!');
            $scope.loading = false;
        });
    };

     // Set biến tạm bằng chỉ số index trong mảng certificates
    $scope.setData = function (i) {
        var c = $scope.certificates[i];

        $scope.certificate = {
            MaChungChi: c.MACHUNGCHI,
            TenChungChi: c.TENCHUNGCHI,
            GhiChu: c.GHICHU
        };
    };

    // Cập nhật
    $scope.updateCertificate = function () {
        console.log($scope.certificate);

        // Hiện nút bấm loading
        $scope.loading = true;
        // Gửi dữ liệu cập nhật lên API
        QLNS.certificate.UPDATE($scope.certificate).then(function (response) {
            console.log(response);

            // Tải lại nội dung trang
            $scope.loading = false;
            $scope.refresh();

            // Đóng modal
            $('#editModal').modal('hide');
        }, function (response) {
            // TODO: Thiết lập thông báo lỗi
            alert('Some thing went wrong!');
            $scope.loading = false;
        });
    };


    // Load dữ liệu ban đầu
    $scope.refresh();
}]);