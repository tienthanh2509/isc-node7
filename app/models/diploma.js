/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var connection = require('../models/connection');

var getDiploma = function(req, res){
    var query = 'SELECT * FROM BANGCAP';
    console.log('Execute query:', query);
    connection.query(query, function(err, rows){
        res.json(rows);
    });
};

module.exports = {
    getDiploma: getDiploma
};