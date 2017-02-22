/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var connection = require('../models/connection');

var getListDepartment = function (req, res) {
    var query = 'SELECT * FROM PHONGBAN';
    console.log('Execute query:', query);
    connection.query(query, function (err, rows) {
        res.end(JSON.stringify(rows));
    });
};

var getDepartmentName = function(req, res){
    var query = 'SELECT MAPB,TENPHONGBAN FROM PHONGBAN';
    connection.query(query, function(err, rows, field){
        //console.log(rows);
        res.end(JSON.stringify(rows));
    });
};

module.exports = {
    getListDepartment: getListDepartment,
    getDepartmentName: getDepartmentName
};