/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var connection = require('../models/connection');

var getListDepartment = function (req, res) {
    var query = 'SELECT * FROM PHONGBAN';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

var getDepartmentWithLeader = function (req, res) {
    var query = 'SELECT * FROM DS_PHONGBAN';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

var getDepartmentName = function (req, res) {
    var query = 'SELECT MAPB,TENPHONGBAN FROM PHONGBAN';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows, field) {
        res.json(rows);
    });
};

var insertDepartment = function (department, res) {
    var values = [
        [
            department.TenPB,
            department.MoTa,
            department.TinhTrang
        ]
    ];

    connection.query("INSERT INTO PHONGBAN(TENPHONGBAN,MOTA,TINHTRANG) VALUES ?", [values], function (err) {
        if (err) {
            console.log('Lỗi khi thêm phòng ban.', values);
            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã thêm phòng ban thành công.', values);

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

var updateDepartment = function (MaPB, department, res) {
    console.log(department);

    var values = [
        department.TenPB,
        department.MoTa,
        department.TinhTrang,
        MaPB
    ];

    var query = 'UPDATE PHONGBAN SET TENPHONGBAN = ?, MOTA = ?, TINHTRANG = ? WHERE MAPB = ?';
    console.log('Execute query:', query, values);

    connection.query(query, values, function (err) {
        if (err) {
            console.log('Lỗi khi cập nhật phòng ban.');
            console.log(err.message);

            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã cập nhật phòng ban thành công.');

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

var deleteDepartment = function (MaPB, res) {
    var query = 'DELETE FROM PHONGBAN WHERE MAPB = ?';
    console.log('Execute query:', query, MaPB);

    connection.query(query, [MaPB], function (err) {
        if (err) {
            console.log('Lỗi khi xóa phòng ban.');
            console.log(err.message);

            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã xóa phòng ban thành công.');

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

module.exports = {
    getListDepartment: getListDepartment,
    getDepartmentName: getDepartmentName,
    getDepartmentWithLeader: getDepartmentWithLeader,
    insertDepartment: insertDepartment,
    updateDepartment: updateDepartment,
    deleteDepartment: deleteDepartment
};