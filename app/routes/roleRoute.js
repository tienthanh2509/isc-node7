var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model employee
var role = require('../models/role');

router.use(bodyParser.json());

router.get('/role', function(req, res){
    role.getRole(req, res);
});

router.get('/roleName', function(req, res){
    role.getRoleName(req, res);
});

router.post('/role', function (req, res) {
    role.insertRole(req.body, res);
});

module.exports = router;