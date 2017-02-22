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
            }
        },
        department: {
            GET: function(){
                return $http.get('/api/department')
            }
        }  
    } 
});