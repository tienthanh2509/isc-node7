/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var connection = require('../models/connection');

var getListDepartment = function (req, res) {
    var query = 'SELECT * FROM DEPARTMENT';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getListDepartment: getListDepartment
};