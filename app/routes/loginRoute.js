var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var administrator = require('../models/administrator');

//Sử dụng bodyParser Json
router.use(bodyParser.json());

// Kiểm tra session nếu hợp lệ thì cho đi tiếp
var auth = function(req, res, next) {
  if (req.session && req.session.user === "admin" && req.session.admin)
    return next();
  else
    return res.redirect('/login');
};

// Trang chủ quản lý nhân sự
router.get('/', auth, function(req, res){
    //console.log( req.session.profile);
    res.render('index.ejs', {
        admin: req.session.profile
    });
});

// Điều hướng đến trang đăng nhập
router.get('/login', function(req, res){
    res.render('login.ejs', {title: 'Login'});
});

// Lấy dử liệu trang đăng nhập để so sánh vs database
router.post('/login', function(req, res){
    administrator.loginAdmin(req.body, req, res);
});

// Đăng xuất, xóa session, quay lại trang login
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.end();
});

module.exports = router;