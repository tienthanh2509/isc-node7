var express = require('express');
var router = express.Router();
var department = require('../models/department');

router.get('/department', function(req, res){
    department.getListDepartment(req,res);
});

module.exports = router;