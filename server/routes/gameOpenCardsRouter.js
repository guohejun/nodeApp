const express = require('express');
const router = express.Router();
let gameOpenCardController = require('../controller/GameOpenCardController')

//翻牌难度级别 ---- 查询
router.get('/getLevels', function(req, res, next) {
	gameOpenCardController.getLevels(req,res,next)
});

//翻牌关卡 ---- 查询
router.get('/getBarriers', function(req, res, next) {
	gameOpenCardController.getBarriers(req,res,next)
});

module.exports = router;
