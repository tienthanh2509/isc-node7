var connection = require('../models/connection');

var getListDepartment = function(req, res){
    var query = 'SELECT * FROM qlns.department';
    connection.query(query, function(err, rows, field){
        console.log(rows);
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getListDepartment: getListDepartment
}