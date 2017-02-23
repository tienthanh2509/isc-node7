/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var nodemailer = require('nodemailer');

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

router.get('/employeeDepartment', function (req, res) {
    employee.getEmployeeDepartment(req,res);
});

router.get('/employee/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    employee.getEmployeeWithID(id, res);
});

router.post('/employee', function(req, res){
    employee.insertEmployee(req.body, res);
});

router.post('/employee/contact', function(req, res){
    sendMail(req.body, res);
});

// chức năng send Mail
var sendMail = function(body, res){
     var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'helloworldcoffeeshop@gmail.com',
            pass: 'kimyen2209'
        }
    });
    var mainOptions = {
        from: 'Node7_Team',
        to: body.email,
        subject: body.subject,
        text: 'You recieved message from ',
        html: '<p>You have got a new message</b><ul><li>Username:' + body.ten + '</li><li>Email:' + body.email + '</li><li>Username:' + body.content + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function(err, info){
        if(err){
            res.end('Lỗi mail: ' + err);
        } else {
            console.log('message info: ' + info.response);
            res.end('gửi mail thành công');
        }
    });
};

// upload files start
router.post('/uploadImage', uploadImage.any(), function(req, res){
    //console.log(req.files);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadCV', uploadCV.any(), function(req, res){
    //console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadScoreTable', uploadScoreTable.any(), function(req, res){
    //console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadHousehold', uploadHousehold.any(), function(req, res){
    //console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadDiploma', uploadDiploma.any(), function(req, res){
    //console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadCertificate', uploadCertificate.any(), function(req, res){
    //console.log(req);
    res.end(JSON.stringify(req.files[0]));
});

router.post('/uploadHealthCertification', uploadHealthCertification.any(), function(req, res){
    //console.log(req);
    res.end(JSON.stringify(req.files[0]));
});
// upload files end

module.exports = router;