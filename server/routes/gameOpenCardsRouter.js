const express = require('express');
const router = express.Router();
let gameOpenCardController = require('../controller/gameOpenCardController')

//设置跨域请求头
router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

//翻牌难度级别 ---- 查询
router.get('/getLevels', function(req, res, next) {
	gameOpenCardController.getLevels(req,res,next)
});

//翻牌关卡 ---- 查询
router.get('/getBarriers', function(req, res, next) {
	gameOpenCardController.getBarriers(req,res,next)
});

module.exports = router;
