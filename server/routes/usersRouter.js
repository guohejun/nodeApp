const express = require('express');
const router = express.Router();
let userController = require('../controller/UserController');

//设置跨域请求头
router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

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
