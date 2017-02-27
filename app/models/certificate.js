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

//Thêm mới chứng chỉ
var insertCertificate = function(certificate, res){
    //console.log(certificate);
    var values = [
        [certificate.TenChungChi, certificate.GhiChu]
    ];
    connection.query("INSERT INTO CHUNGCHI(TENCHUNGCHI, GHICHU) VALUES ?", [values], function(err){
        if(err){
            res.end(err.message);
        } else {
            console.log('succes');
            res.end('succes');      
        }
    });
};

module.exports = {
    getAll: getAll,
    insertCertificate: insertCertificate,
    getListCertificate: getListCertificate
};