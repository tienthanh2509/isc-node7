/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model employee
var diploma = require('../models/diploma');

router.use(bodyParser.json());

router.get('/diploma', function(req, res){
    diploma.getDiploma(req, res);
});
router.post('/diploma/add', function (req, res) {
    diploma.insertDiploma(req.body, res);
});

// Sửa bằng cấp
router.post('/diploma/update/:id', function (req, res) {
    var id = req.params.id;
    diploma.updateDiploma(id, req.body, res);
});

module.exports = router;