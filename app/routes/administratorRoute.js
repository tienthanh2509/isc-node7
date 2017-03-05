var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var administrator = require('../models/administrator');

router.use(bodyParser.json());

router.post('/administratorLogin', function(req, res){
    var admin = req.body;
    administrator.loginAdmin(admin, req, res);
});

module.exports = router;