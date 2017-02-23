var connection = require('../models/connection');

var getRole = function(req, res){
    var query = 'SELECT * FROM CHUCVU';
    console.log('Execute query:', query);
    connection.query(query, function(err, rows){
        res.json(rows);
    });
};

var getRoleName = function(req, res){
    var query = 'SELECT CHUCVU.MACV, CHUCVU.TENCHUVU FROM CHUCVU';
    connection.query(query, function(err, rows){
        res.json(rows);
    });
};

module.exports = {
    getRole: getRole,
    getRoleName: getRoleName
};