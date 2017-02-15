/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var express = require('express');
var router = express.Router();
var employee = require('../models/employee');

router.get('/employee', function(req, res){
    employee.getListEmployee(req, res);
});

module.exports = router;