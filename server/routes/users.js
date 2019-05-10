const express = require('express');
const router = express.Router();
let userDao = require('../dao/userDao')

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
router.get('/addUserAction', function(req, res, next) {
	userDao.addUserAction(req,res,next)
});

module.exports = router;
