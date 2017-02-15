/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

/**
 * Created by Thanh on 1/16/2017.
 */

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);

//var employees = require('./app/routes/employeeCtrl');
//var department = require('./app/routes/departmentCtrl');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// Parse application/json
app.use(bodyParser.json());
// WebRoot
app.use(express.static(__dirname + '/public'));

//app.use('/api', employees);
//app.use('/api', department);

server.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});
