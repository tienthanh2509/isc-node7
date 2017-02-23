/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var connection = require('../models/connection');

// Lấy ra danh sách tất cả nhân viên
var getListEmployee = function (req, res) {
    var query = 'SELECT * FROM NHANVIEN';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.end(JSON.stringify(rows));
    });
};

// Lấy ra danh sách nhân viên theo ID
var getEmployeeWithID = function (id, res) {
    var query = 'SELECT * FROM NHANVIEN WHERE ID_NV = ' + id;
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.end(JSON.stringify(rows));
    });
};

// Lấy ra nhân viên theo tên
var getEmployeeWithName = function(name, res){
    var query = "SELECT * FROM NHANVIEN WHERE TENNV like '%" + name + "'";
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.end(JSON.stringify(rows));
    });
};

// Lấy ra danh sách nhân viên, phòng ban, chức vụ
var getEmployeeDepartment = function(req, res){
    var query = 'Select ID_NV,HONV,TENNV,EMAIL,HINHANH,DIACHI,SODIENTHOAI,n.TINHTRANG,TENCHUVU,TENPHONGBAN From NHANVIEN n, CHUCVU c,PHONGBAN p Where n.MACV = c.MACV and n.MAPB = p.MAPB';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.end(JSON.stringify(rows));
    });
};

// Lấy ra danh sách nhân viên theo mã phòng ban
var getEmployeeWithDepartmentID = function(id, res){
    var query = "SELECT * FROM NHANVIEN WHERE MAPB = " + id;
    console.log('Execute query:', query);
    connection.query(query, function(err, rows){
        res.end(JSON.stringify(rows));
    });
};

// Thêm mới một nhân viên
var insertEmployee = function(employee, res){
    //console.log(employee);
    var values = [
        [employee.maChucVu, employee.maPhongBan, employee.MaNhanVien, employee.Ho, employee.Ten, employee.TonGiao, employee.NgaySinh, employee.DiaChi, employee.DienThoai, employee.Email, employee.imgEmployPath, employee.GioiTinh]
    ];
    connection.query("INSERT INTO NHANVIEN(MACV, MAPB, MANV, HONV, TENNV, TONGIAO, NGAYSINH, DIACHI, SODIENTHOAI, EMAIL, HINHANH, GIOITINH) VALUES ?", [values], function(err){
        if(err){
            res.end(err.message);
        } else {
            console.log('succes');
            res.end('succes');      
        }
    });
};

module.exports = {
    getListEmployee: getListEmployee,
    insertEmployee: insertEmployee,
    getEmployeeWithID: getEmployeeWithID,
    getEmployeeDepartment: getEmployeeDepartment,
    getEmployeeWithDepartmentID: getEmployeeWithDepartmentID,
    getEmployeeWithName: getEmployeeWithName
};