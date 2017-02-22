/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model employee
var department = require('../models/department');

router.use(bodyParser.json());

router.get('/department', function(req, res){
    department.getListDepartment(req, res);
});

module.exports = router;