var connection = require('../models/connection');

// Lấy ra danh sách các loại hợp đồng
var getTypeContract = function(req, res){
    var query = "SELECT * FROM LOAIHOPDONG";
    connection.query(query, function(err, rows){
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getTypeContract: getTypeContract
};