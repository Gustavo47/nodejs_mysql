// DEPENDENCIES
var Sequelize = require('Sequelize');
var dbConf = require('../config.js')

// Instantiating Sequelize CLASS into sequelize OBJECT
var sequelize = new Sequelize(
	dbConf.database,
	dbConf.user,
	dbConf.password,
	{
		host: dbConf.host,
		port: 3306,
		dialect: 'mysql',
		pool: {
    		max: 5,
    		min: 0,
	    	idle: 10000
		},
	}
);

// Exporting the sequelize object so it can be used by another .js file
 module.exports = sequelize;