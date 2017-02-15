/*
 * Copyright (c) 2017 PT Studio
 *
 * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)
 */

/**
 * Created by Capricorn on 09/02/2017.
 */
"use strict";
app.factory('subjectService', function ($http) {
    return {
        getData: function (location) {
            var API_URL = '/api/v1/';
            return $http.get(API_URL + 'subject');
        }
    };
});