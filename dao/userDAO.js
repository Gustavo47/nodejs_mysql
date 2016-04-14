// DEPENDENCIES
var db = require('../model/sequelize');
var user = require('../model/user')

function UserDao(){

}

UserDao.prototype.getAllUsers = function() {
	user.findAll().then(function(users){
		return users
	});
};

var userDao = new UserDao();
/*User.sync().then( function() {
	var user = {
		firstName: 'first',
		lastName: 'last',
		email: 'email@adress.com',
		userName: 'first.last',
		password: 'password'
	}

	User.create(user).then( function(post) {
		console.dir(post.get())
	})
});

module.exports = function getUsers(req, res) {
	user.findAll().success(function (users) {
		res.send(users)
	});
};*/

module.exports = userDao;