// DEPENDENCIES
var Sequelize = require('Sequelize');
var db = require('./sequelize')

var User = db.define('user', {
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
	isEnabled: {
		type: Sequelize.BOOLEAN,
		field: 'is_enabled',
		defaultValue: true
	}
}, {
	freezeTableName: true
});

User.sync().then(function(){
	var user = {
		firstName: 'Gustavo',
		lastName: 'Jardim',
		email: 'gustavo.spadotto@gmail.com',
		userName: 'gustavo.jardim',
		password: 'password'
	}

	User.create(user).then(function(post){
		console.dir(post.get())
	})
});