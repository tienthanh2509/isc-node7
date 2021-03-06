/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

var express = require('express');
var router = express.Router();
var department = require('../models/department');

router.get('/department', function (req, res) {
    department.getListDepartment(req, res);
});

router.get('/departmentName', function (req, res) {
    department.getDepartmentName(req, res);
});
router.get('/department/getDepartmentWithLeader', function (req, res) {
    department.getDepartmentWithLeader(req, res);
});

router.post('/department/add', function (req, res) {
    department.insertDepartment(req.body, res);
});

// Cập nhật thông tin phòng ban
router.post('/department/update/:id', function (req, res) {
    var id = req.params.id;
    department.updateDepartment(id, req.body, res);
});

// Xóa phòng ban
router.delete('/department/:id', function (req, res) {
    var id = req.params.id;
    department.deleteDepartment(id, res);
});

module.exports = router;