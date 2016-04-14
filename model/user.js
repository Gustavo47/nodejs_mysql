// DEPENDENCIES
var Sequelize = require('Sequelize');
var db = require('./sequelize')

var user = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	firstName: {
		type: Sequelize.STRING,
		field: 'first_name'
	},
	lastName: {
		type: Sequelize.STRING,
		field: 'last_name'
	},
	email: {
		type: Sequelize.STRING,
		field: 'email'
	},
	userName: {
		type: Sequelize.STRING,
		field: 'username'
	},
	password: {
		type: Sequelize.STRING,
	},
	createdAt: {
		type: Sequelize.DATEONLY(),
		field: 'created_at'
	},
	updatedAt: {
		type: Sequelize.DATEONLY(),
		field: 'updated_at'
	},
	isEnabled: {
		type: Sequelize.BOOLEAN,
		field: 'is_enabled',
		defaultValue: true
	}
}, {
	freezeTableName: true
});

module.exports = user;