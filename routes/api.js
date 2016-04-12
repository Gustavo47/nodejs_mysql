// DEPENDENCIES
var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO.js');

// ROUTES
//res.setHeader({ 'Content-Type': 'application/json' });

router.get('/users', function(req,res){
	res.send('API is working');
	console.log('Sucessfull get');
	console.log(getAll());
});

router.get('/users/:id', function(req,res){});

router.post('/users', function(req,res){
});

router.put('/users/:id', function(req,res){});

router.delete('/users/:id', function(req,res){});
 

// RETURN ROUTER
module.exports = router;