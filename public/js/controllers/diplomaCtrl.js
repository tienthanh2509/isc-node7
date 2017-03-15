'use strict';

app.controller('diplomaCtrl', ['$scope', 'QLNS', '$window', function($scope, QLNS, $window) {
    // Làm mới trang
    $scope.refresh = function () {
        $scope.loading = null;
        $scope.diplomas = null;

        // Clear biến tạm
        $scope.diploma = {
            MaBC: null,
            TenBangCap: ''
        };

        // Truy vấn API
        QLNS.diploma.GET().then(function (res) {
            $scope.loading = false;
            $scope.diplomas = res.data;
        });
    };


    // Lưu
    $scope.Save = function () {
        QLNS.diploma.POST($scope.diploma).then(function (res) {
            $window.location.href = '#!/diploma';
            alert(res.data);
        });
    };

    // Xóa
   $scope.delete = function (id) {
        console.log('Xóa bằng cấp', id, $scope.diploma);

        $scope.loading = true;
        QLNS.diploma.DELETE(id).then(function (response) {
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

     // Set biến tạm bằng chỉ số index trong mảng diplomas
    $scope.setData = function (i) {
        var d = $scope.diplomas[i];

        $scope.diploma = {
            MaBC: d.MABANGCAP,
            TenBangCap: d.TENBANGCAP
        };
    };

    // Cập nhật
    $scope.updateDiploma = function () {
        console.log($scope.diploma);

        // Hiện nút bấm loading
        $scope.loading = true;
        // Gửi dữ liệu cập nhật lên API
        QLNS.diploma.UPDATE($scope.diploma).then(function (response) {
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