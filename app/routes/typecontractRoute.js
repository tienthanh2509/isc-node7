var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model employee
var typecontract = require('../models/typecontract');

router.use(bodyParser.json());

router.get('/typecontract', function(req, res){
    typecontract.getTypeContract(req, res);
});

module.exports = router;