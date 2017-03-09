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

// API lấy tất cả nhân viên
router.get('/employee', function (req, res) {
    employee.getListEmployee(req, res);
});

// API lấy nhân viên có phòng ban và chức vụ
router.get('/employeeDepartment', function (req, res) {
    employee.getEmployeeDepartment(req,res);
});

// API lấy nhân viên theo ID
router.get('/employee/:id', function (req, res) {
    var id = req.params.id;
    employee.getEmployeeWithID(id, res);
});

// API lấy nhân viên vs Phòng ban, Chức vụ theo ID
router.get('/employee/withDepartmentandRole/:id', function (req, res) {
    var id = req.params.id;
    employee.getEmployeeDepartmentRoleWithID(id, res);
});
//API lấy nhân viên theo chứng chỉ
router.get('/employee/getEmployeeByCertificate/:id', function(req,res){
    var id = req.params.id;
    employee.getEmployeeByCertificate(id,res);
});

//API lấy nhân viên theo phòng ban
router.get('/employee/getEmployeeByDepartment/:id', function(req,res){
    var id = req.params.id;
    employee.getEmployeeByDepartment(id,res);
});

//API lấy nhân viên theo phòng ban + chứng chỉ
router.get('/employee/getEmployeeByCertificateAndDepartment/:idd/:idc',function(req,res){
    var idd = req.params.idd;
    var idc = req.params.idc;
    employee.getEmployeeByCertificateAndDepartment(idd,idc,res);
});

// API lấy nhân viên theo Tên
router.get('/employee/getWithName/:id', function (req, res) {
    var id = req.params.id;
    employee.getEmployeeWithName(id, res);
});

// API lấy danh sách nhân viên theo ID phòng ban
router.get('/employee/getByIdDepartment/:id', function(req, res){
    var id = req.params.id;
    employee.getEmployeeWithDepartmentID(id, res);
});

// API thêm mới một nhân viên
router.post('/employee', function(req, res){
    employee.insertEmployee(req.body, res);
});

// API sửa nhân viên
router.post('/employee/update', function(req, res){
    employee.updateEmployee(req.body, res);
});

// API xóa nhân viên
router.delete('/employee/:id', function(req, res){
    var id = req.params.id;
    employee.deleteEmployee(id, res);
});

// API gửi mail cho nhân viên
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