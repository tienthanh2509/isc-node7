'use strict';

app.factory('QLNS', function ($http) {

    // Biến ID nhân viên toàn cục
    var ID_EMPLOYEE = 0;

    return {
        employee: {
            // Lấy danh sách tất cả nhân viên
            GET: function () {
                return $http.get('/api/employee')
            },
            // Thêm mới một nhân viên
            POST: function (employee) {
                return $http.post('/api/employee', employee)
            },
            // Lấy nhên viên theo ID
            GET_WITH_ID: function(id){
                return $http.get('/api/employee/' + id)
            },

            // API gửi mail đến nhân viên
            SENDMAIL: function(email){
                return $http.post('/api/employee/contact', email)
            },
            // Lấy danh sách nhân viên + phòng ban
            GET_EMP_DEP: function(){
                return $http.get('/api/employeeDepartment')
            },
            // Lấy ra nhân viên với tên truyền vào
            GET_WITH_NAME: function(name){
                return $http.get('/api/employee/getWithName/' + name)
            },
            //Lấy theo chứng chỉ
            GET_BY_CERTIFICATE: function(id){
                return $http.get('/api/employee/getEmployeeByCertificate/'+id)
            },
            //Lấy theo phòng ban
            GET_BY_DEPARTMENT: function(id){
                return $http.get('/api/employee/getEmployeeByDepartment/'+id)
            },
            // Lấy mốt nhân viên + phòng ban + chức vụ theo ID
            GET_DE_ROLE: function(id){
                return $http.get('/api/employee/withDepartmentandRole/' + id)
            },
            // Cập nhật nhân viên
            UPDATE: function(employee){
                return $http.post('/api/employee/update', employee)
            },
            // Xóa nhân viên
            DELETE: function(id){
                return $http.delete('/api/employee/' + id)
            }
        },
        role: {
            // Lấy tất cả chức vụ
            GET: function () {
                return $http.get('/api/role')
            },
            // Lấy tất cả tên chức vụ
            GETNAME: function () {
                return $http.get('/api/roleName')
            },
            //Thêm mới chức vụ
            POST: function (role) {
                return $http.post('/api/role', role)
            }
        },
        department: {
            // Lấy danh sách tất cả phòng ban
            GET: function () {
                return $http.get('/api/department')
            },
            // Lấy danh sách phòng ban + trưởng phòng
            getDepartmentWithLeader: function () {
                return $http.get('/api/department/getDepartmentWithLeader')
            },
            // Lấy tất cả tên phòng ban
            GETNAME: function () {
                return $http.get('/api/departmentName')
            },
            // Thêm mới phòng ban
            POST: function (department) {
                return $http.post('/api/department/add', department)
            },
            // Cập nhật thông tin phòng ban
            updateDepartment: function (department) {
                return $http.post('/api/department/update/' + department.MaPB, department)
            }
        },
        majoring: {
            // Lấy tất cả danh sách chuyên nghành
            GET: function () {
                return $http.get('/api/majoring')
            }
        },
        diploma:{
            //Lấy tất cả bằng cấp
            GET: function () {
                return $http.get('/api/diploma')
            },
            // Thêm mới bằng cấp
            POST: function (diploma) {
                return $http.post('/api/diploma/add', diploma)
            },
            // Cập nhật thông tin bằng cấp
            updateDiploma: function (diploma) {
                return $http.post('/api/diploma/update/' + diploma.MaBC, diploma)
            }
        },
        certificate:{
            // Lấy tất cả chứng chỉ
            GET: function(){
                return $http.get('/api/certificate')
            },

            // Thêm mới một chứng chỉ
            POST: function (certificate) {
                return $http.post('/api/certificate', certificate)
        },
        values:{
            // Gán giá trị ID nhân viên được chọn làm biến toàn cụ
            SET_ID_EMPLOYEE: function(id){
                ID_EMPLOYEE = id;
            },
            // Lấy ra biến nhân viên toàn cục
            GET_ID_EMPLOYEE: function(){
                return ID_EMPLOYEE; 
            }
        }
    }
}});