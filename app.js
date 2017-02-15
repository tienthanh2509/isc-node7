/*
 * Copyright (c) 2017 PT Studio
 *
 * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)
 */

/**
 * Created by Thanh on 1/16/2017.
 */

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app = express();

// Thiết lập kết nối CSDL
var connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'isc',
    port: process.env.DB_PORT || '3306',
    password: process.env.DB_PASSWORD || 'd13ht01',
    database: process.env.DB_DATABASE || 'quan-ly-hoc-vien'

});

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// Parse application/json
app.use(bodyParser.json());
// WebRoot
app.use(express.static('public'));

// API Section - Mock data
app.get('/api/v1/faculty', function (req, res) {
    var faculty = [
        {
            "id": "1",
            "ids": "KHNN",
            "name": "Tiếng Anh học thuật"
        },
        {
            "id": "2",
            "ids": "CNTT",
            "name": "Công nghệ thông tin"
        },
        {
            "id": "3",
            "ids": "QTKD",
            "name": "Kinh doanh - quản lý"
        },
        {
            "id": "4",
            "ids": "TTQT",
            "name": "Thực tập quốc tế"
        }
    ];

    res.json(faculty);
});
app.post('/api/v1/faculty', function (req, res) {
    var faculty = [
        {
            "error": 0,
            "message": "OK"
        }
    ];

    res.json(faculty);
    console.log(req.body);
});
app.delete('/api/v1/faculty/:id', function (req, res) {
    var faculty = [
        {
            "error": 0,
            "message": "OK"
        }
    ];

    res.json(faculty);
    console.log(req.params);
});

app.get('/api/v1/student', function (req, res) {
    var student = [
        {
            "id": "011",
            "name": "Nguyễn Bính",
            "birthday": "1/1/1995",
            "sex": "Nam",
            "faculty": "Hệ thống thông tin"
        }
    ];

    res.json(student);
});

app.get('/api/v1/subject', function (req, res) {
    var subject = [
        {
            "id": "011",
            "maMH": "ISC1PM",
            "tenMH": "Lập trình Java",
            "soTC": "3",
            "khoa": "Công nghệ thông tin"
        },
        {
            "id": "01",
            "maMH": "ISC1KT",
            "tenMH": "Kinh doanh quản lý",
            "soTC": "2",
            "khoa": "Quản Trị Kinh doanh"
        }
    ];

    res.json(subject);
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + (process.env.PORT || 3000));
});
