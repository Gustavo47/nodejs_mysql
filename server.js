// DEPENDENCIES 
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var md5 = require('MD5');
var db = require('./config.js');

// EXPRESS
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// ROUTES
app.use('/api', require('./route/user'));
app.use('/api', require('./route/ingredient'));

// START SERVER
app.listen(3000);
console.log('API is alive at port 3000');