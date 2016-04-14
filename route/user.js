// DEPENDENCIES
var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDAO.js');

// ROUTES
//res.setHeader({ 'Content-Type': 'application/json' });

router.get('/user', function (req,res) {
	console.log(userDao.getAllUsers());
});

router.get('/user/:id', function(req,res){});

router.post('/user', function(req,res){
});

router.put('/user/:id', function(req,res){});

router.delete('/user/:id', function(req,res){});

// RETURN ROUTER
module.exports = router;