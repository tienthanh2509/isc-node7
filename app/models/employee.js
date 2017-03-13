/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var connection = require('../models/connection');

// Lấy ra danh sách tất cả nhân viên
var getListEmployee = function (req, res) {
    var query = 'SELECT * FROM PHONGBAN_NHANVIEN_CHUNGCHI_CHUYENNGANH';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

// Lấy ra danh sách nhân viên theo ID
var getEmployeeWithID = function (id, res) {
    var query = 'SELECT * FROM NHANVIEN WHERE ID_NV = ' + id;
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

// Lấy ra danh sách nhân viên vs Phòng Ban, Chức Vụ theo ID
var getEmployeeDepartmentRoleWithID = function (id, res) {
    var query = 'SELECT * FROM NHANVIEN n,PHONGBAN p,CHUCVU c WHERE n.MAPB = p.MAPB and n.MACV = c.MACV and n.ID_NV = ' + id;
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.json(rows);
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
//Lấy nhân viên theo chứng chỉ
var getEmployeeByCertificate = function(id,res){
    var query = "SELECT * FROM PHONGBAN_NHANVIEN_CHUNGCHI_CHUYENNGANH WHERE MACHUNGCHI = " +id;
    console.log("Execute query:",query);
    connection.query(query,function(err,rows){
        res.end(JSON.stringify(rows));
    });
};
//Lấy nhân viên theo phòng ban
var getEmployeeByDepartment = function(id,res){
    var query = "SELECT * FROM PHONGBAN_NHANVIEN_CHUNGCHI_CHUYENNGANH WHERE MAPB = " +id;
    console.log("Execute query:",query);
    connection.query(query,function(err,rows){
        res.end(JSON.stringify(rows));
    });
};
//Lấy nhân viên theo phòng ban + chứng chỉ
var getEmployeeByCertificateAndDepartment = function(idd,idc,res){ //idc là id của certificate; idd là id của department
    var query = "SELECT * FROM PHONGBAN_NHANVIEN_CHUNGCHI_CHUYENNGANH WHERE MAPB="+idd+" AND MACHUNGCHI="+idc;
    console.log("Excute query:",query);
    connection.query(query,function(err,rows){
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
        [employee.MACV, employee.MAPB, employee.MANV, employee.HONV, employee.TENNV, employee.TONGIAO, employee.NGAYSINH, employee.DIACHI, employee.SODIENTHOAI, employee.EMAIL, employee.HINHANH, employee.GIOITINH]
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

// Cập nhật nhân viên
var updateEmployee = function(employee, res){
    var values = {
        MACV: employee.MACV,
        MAPB: employee.MAPB,
        HONV: employee.HONV,
        TENNV: employee.TENNV,
        TONGIAO: employee.TONGIAO,
        GIOITINH: employee.GIOITINH,
        NGAYSINH: employee.NGAYSINH,
        DIACHI: employee.DIACHI,
        SODIENTHOAI: employee.SODIENTHOAI,
        EMAIL: employee.EMAIL,
        HINHANH: employee.HINHANH
    };
    var query = "UPDATE NHANVIEN SET ? WHERE ?";
    connection.query(query, [values, {ID_NV: employee.ID_NV}], function(err){
        if(err){
            res.end(err.message);
        } else {
            console.log('succes');
            res.end('succes');      
        }
    });
};

// Xóa nhân viên
var deleteEmployee = function(id, res){
    var query = "DELETE FROM NHANVIEN WHERE ID_NV = ?";
    connection.query(query, [id], function(err, result){
        if(err){
            res.end(err.message);
        } else {
            res.end('delete succes');
        }
    });
};

module.exports = {
    getListEmployee: getListEmployee,
    insertEmployee: insertEmployee,
    getEmployeeWithID: getEmployeeWithID,
    getEmployeeDepartment: getEmployeeDepartment,
    getEmployeeWithDepartmentID: getEmployeeWithDepartmentID,
    getEmployeeWithName: getEmployeeWithName,
    getEmployeeDepartmentRoleWithID: getEmployeeDepartmentRoleWithID,
    updateEmployee: updateEmployee,
    getEmployeeWithName: getEmployeeWithName,
    getEmployeeByCertificate: getEmployeeByCertificate,
    getEmployeeByDepartment: getEmployeeByDepartment,
    deleteEmployee: deleteEmployee,
    getEmployeeByCertificateAndDepartment: getEmployeeByCertificateAndDepartment
};