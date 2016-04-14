// DEPENDENCIES
var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO.js');

// ROUTES
//res.setHeader({ 'Content-Type': 'application/json' });

router.get('/ingredient', function(req,res){
	res.send('API is working');
	console.log('Sucessfull get');
});

router.get('/ingredient/:id', function(req,res){});

router.post('/ingredient', function(req,res){
});

router.put('/ingredient/:id', function(req,res){});

router.delete('/ingredient/:id', function(req,res){});
 

// RETURN ROUTER
module.exports = router;