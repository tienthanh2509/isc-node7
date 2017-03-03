'use strict';

/**
 * Created by AnhDuc on 22/02/2017.
 * Updated by PhamThanh on 24/02/2017.
 */
app.controller('departmentCtrl', ['$scope', 'QLNS', function ($scope, QLNS) {
    // 1. Làm tươi nội dung
    $scope.refresh = function () {
        $scope.loading = null;
        $scope.departments = null;

        // Clear biến tạm
        $scope.department = {
            MaPB: null,
            TenPB: '',
            MoTa: '',
            TinhTrang: 1
        };

        // Truy vấn API
        QLNS.department.getDepartmentWithLeader().then(function (res) {
            $scope.loading = false;
            $scope.departments = res.data;
        });
    };

    // 2. Thêm mới phòng ban
    $scope.Save = function () {
        QLNS.department.POST($scope.department).then(function (res) {
            alert(res.data.message);
        })
    };

    // 3. Set biến tạm bằng chỉ số index trong mảng departments
    $scope.setData = function (i) {
        var d = $scope.departments[i];

        $scope.department = {
            MaPB: d.MAPB,
            TenPB: d.TENPHONGBAN,
            MoTa: d.MOTA,
            TinhTrang: d.TINHTRANG
        };
    };

    // 4. Cập nhật phòng ban
    $scope.updateDepartment = function () {
        console.log($scope.department);

        // Hiện nút bấm loading
        $scope.loading = true;
        // Gửi dữ liệu cập nhật lên API
        QLNS.department.UPDATE($scope.department).then(function (response) {
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

    // 5. Xóa phòng ban
    $scope.delete = function (id) {
        console.log('Xóa phòng ban', id, $scope.department);

        $scope.loading = true;
        QLNS.department.DELETE(id).then(function (response) {
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