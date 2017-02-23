app.factory('QLNS', function ($http) {
    return {
        employee: {
            GET: function () {
                return $http.get('/api/employee')
            },
            POST: function (employee) {
                return $http.post('/api/employee', employee)
            },
            GET_WITH_ID: function(id){
                return $http.get('/api/employee/' + id)
            },
            SENDMAIL: function(email){
                return $http.post('/api/employee/contact', email)
            }
        },
        role: {
            GET: function () {
                return $http.get('/api/role')
            },
            GETNAME: function () {
                return $http.get('/api/roleName')
            }
        },
        department: {
            GET: function () {
                return $http.get('/api/department')
            },
            GETNAME: function () {
                return $http.get('/api/departmentName')
            },
            POST: function (department) {
                return $http.post('/api/department', department)
            }
        },
        majoring: {
            GET: function () {
                return $http.get('/api/majoring')
            }
        }
    }
});