'use strict';

var connection = require('../models/connection');

var get = function (req, res) {
    var query = 'SELECT * FROM CHUCVU';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

var getName = function (req, res) {
    var query = 'SELECT CHUCVU.MACV, CHUCVU.TENCHUVU FROM CHUCVU';
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

var getStat = function (req, res) {
    var query = 'SELECT * FROM DS_CHUCVU';
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

var insert = function (role, res) {
    var values = [
        [
            role.MaCV,
            role.TenCV
        ]
    ];

    connection.query("INSERT INTO CHUCVU(MACV, TENCHUVU) VALUES ?", [values], function (err) {
        if (err) {
            console.log('Lỗi khi thêm chức vụ.', values);
            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã thêm chức vụ thành công.', values);

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

var update = function (MaCV, role, res) {
    console.log(role);

    var values = [
        role.TenCV,
        MaCV
    ];

    var query = 'UPDATE CHUCVU SET TENCHUVU = ?WHERE MACV = ?';
    console.log('Execute query:', query, values);

    connection.query(query, values, function (err) {
        if (err) {
            console.log('Lỗi khi cập nhật chức vụ.');
            console.log(err.message);

            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã cập nhật chức vụ thành công.');

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

var del = function (MaCV, res) {
    var query = 'DELETE FROM CHUCVU WHERE MACV = ?';
    console.log('Execute query:', query, MaCV);

    connection.query(query, [MaCV], function (err) {
        if (err) {
            console.log('Lỗi khi xóa chức vụ.');
            console.log(err.message);

            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã xóa chức vụ thành công.');

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

module.exports = {
    get: get,
    getName: getName,
    getStat: getStat,
    insert: insert,
    update: update,
    del: del
};