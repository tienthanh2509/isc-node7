/*
 * Copyright (c) 2017 Node7 Team
 *
 * Licensed under MIT (https://github.com/tienthanh2509/isc-node7/blob/master/LICENSE)
 */

/**
 * Created by Thanh on 1/16/2017.
 */

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

var employees = require('./app/routes/employeeRoute');
var department = require('./app/routes/departmentRoute');
var role = require('./app/routes/roleRoute');
var majoring = require('./app/routes/majoringRoute');
var certificate = require('./app/routes/certificateRoute');
var diploma = require('./app/routes/diplomaRoute');
var typecontract = require('./app/routes/typecontractRoute');
var login = require('./app/routes/loginRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
     secret: '2C44-4D44-WppQ38S',
     resave: true,
     saveUninitialized: true
 }));

// WebRoot
app.use('/', express.static(__dirname + '/public'));
app.use('/vendors', express.static(__dirname + '/bower_components'));

// Set engine ejs
 app.set('view engine', 'ejs');

 // Index and Login routes
 app.use('/', login);

// API routes
app.use('/api', employees);
app.use('/api', department);
app.use('/api', role);
app.use('/api', majoring);
app.use('/api', certificate);
app.use('/api', diploma);
app.use('/api', typecontract);

/////////////////////////////////////////////////
// catch 404 and forward to error handler
app.use(function (req, res) {
    res.status(404);
    console.error('404 ' + req.method + ": " + req.url);
    res.end();
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

/////////////////////////////////////////////////
module.exports = app;
