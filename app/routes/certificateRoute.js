//Lấy danh sách các chứng chỉ
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model certificate
var certificate = require('../models/certificate');

router.use(bodyParser.json());

// API lấy danh sách tất cả chứng chỉ
router.get('/certificate', function(req, res){
    certificate.getAll(req, res);
});

// API thêm mới một chứng chỉ
router.post('/certificate', function(req, res){
    certificate.insertCertificate(req.body, res);
});

module.exports = router;