const express = require('express');
const router = express.Router();
let gameOpenCardController = require('../controller/GameOpenCardController');

//翻牌难度 ---- 查询难度列表
router.get('/getLevels', function(req, res, next) {
	gameOpenCardController.getLevels(req,res,next)
});

//翻牌关卡 ---- 根据level查询某难度关卡总列表
router.get('/getBarriersByLevel', function(req, res, next) {
	gameOpenCardController.getBarriersByLevel(req,res,next)
});

//翻牌关卡 ---- 根据level和user_id查询关卡详情
router.get('/getBarrierByLevelBarrier', function(req, res, next) {
	gameOpenCardController.getBarrierByLevelBarrier(req,res,next)
});

//翻牌关卡 ---- 创建或更新进度
router.post('/addOrUpdateCardProgress', function(req, res, next) {
	gameOpenCardController.addOrUpdateCardProgress(req,res,next)
});

//翻牌关卡 ---- 根据level和user_id查询用户进度
router.get('/getLevelProgress', function(req, res, next) {
	gameOpenCardController.getLevelProgress(req,res,next)
});


module.exports = router;
