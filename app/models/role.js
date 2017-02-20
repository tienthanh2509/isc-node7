var connection = require('../models/connection');

var getRole = function(req, res){
    connection.query('SELECT * FROM CHUCVU', function(err, rows, fileld){
        console.log(rows);
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getRole: getRole
};