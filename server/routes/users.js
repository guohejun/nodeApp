const express = require('express');
const router = express.Router();
let userController = require('../controller/userController')

//设置跨域请求头
router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

/**
 * 用户增加的路由控制接口
 */
router.post('/createUser', function(req, res, next) {
	console.log('111111111111')
	userController.createUser(req,res,next)
});

module.exports = router;
