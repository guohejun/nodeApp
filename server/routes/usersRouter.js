const express = require('express');
const router = express.Router();
let userController = require('../controller/UserController');

router.post('/register', function(req, res, next) {
	userController.register(req,res,next)
});

router.post('/login', function(req, res, next) {
	userController.login(req,res,next)
});

router.get('/userDetail', function(req, res, next) {
	userController.userDetail(req,res,next)
});

module.exports = router;
