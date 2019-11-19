const express = require('express');
const router = express.Router();
let gameOpenCardController = require('../controller/GameOpenCardController');

//翻牌难度 ---- 查询难度列表
router.get('/getLevels', function(req, res, next) {
	gameOpenCardController.getLevels(req,res,next)
});

//翻牌关卡 ---- 根据level和userId查询关卡列表和用户进度
router.get('/getBarriers', function(req, res, next) {
	gameOpenCardController.getBarriers(req,res,next)
});

//翻牌关卡 ---- 根据id查询关卡
router.get('/getBarrierById', function(req, res, next) {
	gameOpenCardController.getBarrierById(req,res,next)
});

//翻牌关卡 ---- 创建或更新进度
router.post('/addOrUpdateCardProgress', function(req, res, next) {
	gameOpenCardController.addOrUpdateCardProgress(req,res,next)
});

module.exports = router;
