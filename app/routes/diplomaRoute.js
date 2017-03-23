//Lấy danh sách các bằng cấp
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model diploma
var diploma = require('../models/diploma');

router.use(bodyParser.json());

// API lấy bằng cấp
router.get('/diploma', function (req, res) {
    diploma.getDiploma(req, res);
});

// API thêm mới một bằng cấp
router.post('/diploma', function(req, res){
    diploma.insertDiploma(req.body, res);
});

// API xóa bằng cấp
router.delete('/diploma/:id', function (req, res) {
    var id = req.params.id;
    diploma.deleteDiploma(id, res);
});

// Cập nhật thông tin bằng cấp
router.post('/diploma/update/:id', function (req, res) {
    var id = req.params.id;
    diploma.updateDiploma(id, req.body, res);
});

module.exports = router;
