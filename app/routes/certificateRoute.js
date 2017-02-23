//Lấy danh sách các chứng chỉ
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// use model certificate
var certificate = require('../models/certificate');

router.use(bodyParser.json());

// API lấy danh sách tất cả chứng chỉ
router.get('/certificate', function(req, res){
    certificate.getListCertificate(req, res);
});

module.exports = router;