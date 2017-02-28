var connection = require('../models/connection');

var loginAdmin = function(admin, res){
    var query = "SELECT Count(ID) AS TONTAI, TAIKHOAN, HO, TEN, HINHANH FROM ADMINISTRATOR WHERE ? AND ?";
    connection.query(query,[{TAIKHOAN: admin.TAIKHOAN}, {MATKHAU: admin.MATKHAU}], function(err, result){
        if(err){
            res.end(err.message);
        } else {
            res.end(JSON.stringify(result[0]));
        }
    });
};

module.exports = {
    loginAdmin: loginAdmin
};