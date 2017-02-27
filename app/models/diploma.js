/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var connection = require('../models/connection');

var getDiploma = function(req, res){
    var query = 'SELECT * FROM BANGCAP';
    console.log('Execute query:', query);
    connection.query(query, function(err, rows){
        res.json(rows);
    });
};
var insertDiploma = function (diploma, res) {
    var values = [
        [
            diploma.TENBANGCAP
        ]
    ];

    connection.query("INSERT INTO BANGCAP(TENBANGCAP) VALUES ?", [values], function (err) {
        if (err) {
            console.log('Lỗi khi thêm bằng cấp.', values);
            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã thêm bằng cấp thành công.', values);

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};
var updateDiploma = function (MaBC, diploma, res) {
    console.log(diploma);

    var values = [
        diploma.TenBC,
        MaBC
    ];

    var query = 'UPDATE BANGCAP SET TENBANGCAP = ? WHERE MABANGCAP = ?';
    console.log('Execute query:', query, values);

    connection.query(query, values, function (err) {
        if (err) {
            console.log('Lỗi khi cập nhật bằng cấp.');
            console.log(err.message);

            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã cập nhật bằng cấp thành công.');

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

module.exports = {
    getDiploma: getDiploma,
    insertDiploma: insertDiploma,
    updateDiploma: updateDiploma
};