var connection = require('../models/connection');

var getRole = function(req, res){
    var query = 'SELECT * FROM CHUCVU';
    console.log('Execute query:', query);
    connection.query(query, function(err, rows){
        res.json(rows);
    });
};

var getRoleName = function(req, res){
    var query = 'SELECT CHUCVU.MACV, CHUCVU.TENCHUVU FROM CHUCVU';
    connection.query(query, function(err, rows){
        res.json(rows);
    });
};

var insertRole = function (role, res) {
    var values = [
        [
            role.MaCV,
            role.TenCV
        ]
    ];

    connection.query("INSERT INTO CHUCVU(MACV, TENCHUVU) VALUES ?", [values], function (err) {
        if (err) {
            console.log('Lỗi khi thêm chức vụ.', values);
            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã thêm chức vụ thành công.', values);

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

module.exports = {
    getRole: getRole,
    getRoleName: getRoleName,
    insertRole: insertRole

};