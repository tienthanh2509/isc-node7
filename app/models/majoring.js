var connection = require('../models/connection');

var getListMajoring = function(req, res){
    var query = 'SELECT * FROM NGANHHOC';
    connection.query(query, function(err, rows, field){
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getListMajoring: getListMajoring
};