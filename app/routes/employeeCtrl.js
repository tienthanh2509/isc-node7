var express = require('express');
var router = express.Router();
var employee = require('../models/employee');

router.get('/employee', function(req, res){
    employee.getListEmployee(req, res);
});

module.exports = router;