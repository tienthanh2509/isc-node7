//Lấy danh sách các chứng chỉ
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model certificate
var certificate = require('../models/certificate');

router.use(bodyParser.json());

// API lấy chứng chỉ
router.get('/certificate', function (req, res) {
    certificate.getListCertificate(req, res);
});

// API thêm mới một chứng chỉ
router.post('/certificate', function(req, res){
    certificate.insertCertificate(req.body, res);
});

// API xóa chứng chỉ
router.delete('/certificate/:id', function(req, res){
    var id = req.params.id;
    certificate.deleteCertificate(id, res);
});

// API cập nhật
router.post('/certificate/update/:id', function (req, res) {
    var id = req.params.id;
    certificate.updateCertificate(id, req.body, res);
});

module.exports = router;