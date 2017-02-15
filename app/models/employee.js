var connection = require('../models/connection');

var getListEmployee = function(req, res){
    var query = 'SELECT * FROM qlns.employees';
    connection.query(query, function(err, rows, field){
        console.log(rows);
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getListEmployee: getListEmployee
}