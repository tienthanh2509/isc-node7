var connection = require('../models/connection');

// Lấy danh sách tất cả chứng chỉ
var getListCertificate = function (req, res) {
    var query = 'SELECT TENCHUNGCHI FROM CHUNGCHI ';
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

var getAll = function (req, res) {
    var query = 'SELECT * FROM CHUNGCHI ';
    connection.query(query, function (err, rows) {
        res.json(rows);
    });
};

module.exports = {
    getAll: getAll,
    getListCertificate: getListCertificate
};