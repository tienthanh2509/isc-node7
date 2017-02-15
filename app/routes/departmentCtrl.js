/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var express = require('express');
var router = express.Router();
var department = require('../models/department');

router.get('/department', function(req, res){
    department.getListDepartment(req,res);
});

module.exports = router;