/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var mysql = require("mysql");

// Thiết lập kết nối CSDL dùng Connection
var connection = mysql.createConnection({
 host: process.env.DB_HOST || 'localhost',
 user: process.env.DB_USER || 'root',
 port: process.env.DB_PORT || '3306',
 password: process.env.DB_PASSWORD || '',
 database: process.env.DB_DATABASE || 'qlns'
});

connection.connect(function(){
    console.log('connect success');
});

module.exports = connection;