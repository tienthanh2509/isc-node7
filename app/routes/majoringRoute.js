var express = require('express');
var router = express.Router();
var majoring = require('../models/majoring');

router.get('/majoring', function(req, res){
    majoring.getListMajoring(req, res);
});

module.exports = router;