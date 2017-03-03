'use strict';

var express = require('express');
var router = express.Router();
var role = require('../models/role');

// 1. GET
router.get('/role', function (req, res) {
    role.getStat(req, res);
});

// 2. GET Name
router.get('/roleName', function (req, res) {
    role.getName(req, res);
});

// 3. ADD
router.post('/role/add', function (req, res) {
    role.insert(req.body, res);
});

// 4. UPDATE
router.put('/role/:id', function (req, res) {
    var id = req.params.id;
    role.update(id, req.body, res);
});

// 5. DELETE
router.delete('/role/:id', function (req, res) {
    var id = req.params.id;
    role.del(id, res);
});

module.exports = router;