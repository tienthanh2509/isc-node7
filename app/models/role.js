var connection = require('../models/connection');

var getRole = function(req, res){
    var query = 'SELECT * FROM CHUCVU';
    console.log('Execute query:', query);
    connection.query(query, function(err, rows){
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getRole: getRole
};