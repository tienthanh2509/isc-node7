var connection = require('../models/connection');

var loginAdmin = function(admin,req, res){
    var query = "SELECT Count(ID) AS TONTAI, TAIKHOAN, HO, TEN, HINHANH FROM ADMINISTRATOR WHERE ? AND ?";
    connection.query(query,[{TAIKHOAN: admin.TAIKHOAN}, {MATKHAU: admin.MATKHAU}], function(err, result){
        if(err){
            res.end(err.message);
        } else {
            var tontai = JSON.stringify(result[0].TONTAI);
            if(tontai === '0'){
                res.json({status: '0', comment: 'Mật khẩu hoặc tài khoản không đúng!'});
            } else if(tontai === '1') {
                req.session.user = "admin";
                req.session.admin = true;
                req.session.profile = result[0];         
                res.json({status: '1', admin: result[0]});
                //res.render('index.ejs', {admin: JSON.stringify(result[0])})
            }
        }
    });
};

module.exports = {
    loginAdmin: loginAdmin
};