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
router.post('/diploma', function (req, res) {
    diploma.insertDiploma(req.body, res);
});

// API lấy bằng cấp theo ID
router.get('/diploma/:id', function (req, res) {
    var id = req.params.id;
    diploma.getDiplomaWithID(id, res);
});

// API xóa bằng cấp
router.delete('/diploma/:id', function(req, res){
    var id = req.params.id;
    diploma.deleteDiploma(id, res);
});
module.exports = router;