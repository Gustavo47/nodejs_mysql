// DEPENDENCIES
var restful = require('node-restful');
var mysql = require('mysql');
var db = require('../config.js');

// DATABASE CONNECTION
var conn = mysql.createConnection({
	host: db.host,
	user: db.user,
	password: db.password,
	database: db.database
});

conn.connect(function(err){
if(!err) {
    console.log('Database is connected...');    
} else {
    console.log('Error connecting database... n' + s);    
}
});

var getAll = function (){
	conn.query('SELECT * FROM User');
};

module.exports = getAll();