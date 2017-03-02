'use strict';

app.controller('roleCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {
    // 1. Làm tươi nội dung
    $scope.refresh = function () {
        // Clear biến tạm
        $scope.role = {
            MaCV: '',
            TenCV: ''
        };

        // Truy vấn API
        QLNS.role.GET().then(function (res) {
            $scope.loading = false;
            $scope.roles = res.data;
        });
    };

    // 2. Thêm mới chức vụ
    $scope.Save = function () {
        QLNS.role.POST($scope.role).then(function (res) {
            alert(res.data.message);
        })
    };

    // 3. Set biến tạm bằng chỉ số index trong mảng roles
    $scope.setData = function (i) {
        var d = $scope.roles[i];

        $scope.role = {
            MaCV: d.MACV,
            TenCV: d.TENCHUVU
        };
    };

    // 4. Cập nhật chức vụ
    $scope.updateRole = function () {
        console.log($scope.role);
        // Hiện nút bấm loading
        $scope.loading = true;

        // Gửi dữ liệu cập nhật lên API
        QLNS.role.UPDATE($scope.role).then(function (response) {
            console.log(response);

            // Tải lại nội dung trang
            $scope.loading = false;
            $scope.refresh();

            // Đóng modal
            $('#editModal').modal('hide');
        }, function (response) {
            // TODO: Thiết lập thông báo lỗi
            alert('Some thing went wrong!');
            $scope.saving = false;
        });
    };

    // 5. Xóa chức vụ
    $scope.delete = function (id) {
        console.log('Xóa chức vụ', id, $scope.role);

        // Hiện nút bấm loading
        $scope.loading = true;

        // Gửi yêu cầu xóa
        QLNS.role.DELETE(id).then(function (response) {
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

    // Load dữ liệu ban đầu
    $scope.refresh();
}]);