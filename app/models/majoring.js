var connection = require('../models/connection');

var getListMajoring = function(req, res){
    var query = 'SELECT * FROM CHUYENNGANH';
    connection.query(query, function(err, rows){
        res.json(rows);
    });
};

module.exports = {
    getListMajoring: getListMajoring
};