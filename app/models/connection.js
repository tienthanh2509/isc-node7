/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var mysql = require("mysql");

// Thiết lập kết nối CSDL dùng Connection
var dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || '3306',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'isc-node7'
};
var connection = mysql.createConnection(dbConfig);

connection.connect(function () {
    console.log('[DB] Connected to ' + dbConfig.user + '@' + dbConfig.host + ':' + dbConfig.port);
});

module.exports = connection;