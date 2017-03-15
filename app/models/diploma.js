var connection = require('../models/connection');

// Lấy danh sách tất cả bằng cấp
var getDiploma = function (req, res) {
    var query = 'SELECT * FROM BANGCAP ';
    connection.query(query, function (err, rows) {
        res.json(rows);
    }); 
};


//Thêm mới
var insertDiploma = function(diploma, res){
    var values = [
        [diploma.TenBangCap]
    ];
    connection.query("INSERT INTO BANGCAP(TENBANGCAP) VALUES ?", [values], function(err){
        if(err){
            res.end(err.message);
        } else {
            console.log('success');
            res.end('success');      
        }
    });
};


// Xóa
var deleteDiploma = function (MaBC, res) {
    var query = 'DELETE FROM BANGCAP WHERE MABANGCAP = ?';
    console.log('Execute query:', query, MaBC);

    connection.query(query, [MaBC], function (err) {
        if (err) {
            console.log('Lỗi khi xóa bằng cấp.');
            console.log(err.message);

            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã xóa bằng cấp thành công.');

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};

// Cập nhật bằng cấp
var updateDiploma = function (MaBC, diploma, res) {
    console.log(diploma);

    var values = [
        diploma.TenBangCap,
        MaBC
    ];

    var query = 'UPDATE BANGCAP SET TENBANGCAP = ? WHERE MABANGCAP = ?';
    console.log('Execute query:', query, values);

    connection.query(query, values, function (err) {
        if (err) {
            console.log('Lỗi khi cập nhật bằng cấp.');
            console.log(err.message);

            res.json({
                error: 1,
                message: err.message
            });
        }
        else {
            console.log('Đã cập nhật bằng cấp thành công.');

            res.json({
                error: 0,
                message: 'OK'
            });
        }

    })

};


module.exports = {
    getDiploma: getDiploma,
    insertDiploma: insertDiploma,
    updateDiploma: updateDiploma,
    deleteDiploma: deleteDiploma
};