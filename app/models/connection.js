/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var mysql = require("mysql");

// Thiết lập kết nối CSDL dùng Pool
/*var connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || '3306',
    //password: process.env.DB_PASSWORD || 'd13ht01',
    database: process.env.DB_DATABASE || 'qlns'

});*/

// Thiết lập kết nối CSDL dùng Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: 'tronghuy229',
    database: 'qlns'
});

connection.connect();

module.exports = connection;