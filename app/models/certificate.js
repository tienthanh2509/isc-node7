var connection = require('../models/connection');

// Lấy danh sách tất cả chứng chỉ
var getListCertificate = function (req, res) {
    var query = 'SELECT TENCHUNGCHI FROM CHUNGCHI ';
    connection.query(query, function (err, rows, field) {
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getListCertificate : getListCertificate
};