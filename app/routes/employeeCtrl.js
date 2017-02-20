/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');

// direct image employee
var uploadImage = multer({ dest: 'public/uploads/employeeImage/'});
// direct đơn xin việc
var uploadCV = multer({ dest: 'public/uploads/CV/'});
// direct bảng điểm
var uploadScoreTable = multer({ dest: 'public/uploads/ScoreTable/'});
// direct chứng chỉ
var uploadCertificate = multer({ dest: 'public/uploads/Certificate/'});
// direct hộ khẩu
var uploadHousehold = multer({ dest: 'public/uploads/Household/'});
// direct bằng tốt nghiệp
var uploadDiploma = multer({ dest: 'public/uploads/Diploma/'});
// direct giấy khám sức khỏe
var uploadHealthCertification = multer({ dest: 'public/uploads/HealthCertification/'});

// use model employee
var employee = require('../models/employee');

router.use(bodyParser.json());

router.get('/employee', function (req, res) {
    employee.getListEmployee(req, res);
});

router.post('/employee', function(req, res){
    console.log(req.body);
    res.end();
});


// upload files start
router.post('/uploadImage', uploadImage.any(), function(req, res){
    console.log(req.files);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadCV', uploadCV.any(), function(req, res){
    console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadScoreTable', uploadScoreTable.any(), function(req, res){
    console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadHousehold', uploadHousehold.any(), function(req, res){
    console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadDiploma', uploadDiploma.any(), function(req, res){
    console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadCertificate', uploadCertificate.any(), function(req, res){
    console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadHealthCertification', uploadHealthCertification.any(), function(req, res){
    console.log(req);
    res.end(JSON.stringify(req.files[0]));
});
// upload files end

module.exports = router;