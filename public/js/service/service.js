app.factory('QLNS', function($http){
    return {
        employee: {
            GET: function(){
                return $http.get('/api/employee')
            },
            POST: function(employee){
                return $http.post('/api/employee', employee)
            }
        },
        role: {
            GET: function(){
                return $http.get('/api/role')
            },
            GETNAME: function(){
                return $http.get('/api/roleName')
            }
        },
        department: {
            GET: function(){
                return $http.get('/api/department')
            },
            GETNAME: function(){
                return $http.get('/api/departmentName')
            }
        },
        majoring: {
            GET: function(){
                return $http.get('/api/majoring')
            }
        }
    } 
});