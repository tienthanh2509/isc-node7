/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

'use strict';

app.factory('studentService', function ($http) {
    return {
        getData: function (location) {
            var API_URL = '/api/v1/';
            return $http.get(API_URL + 'student');
        }
    };
});