let gameOpenCardLevel = require('../model/gameOpenCardLevel');
let gameOpenCardBarrier = require('../model/gameOpenCardBarrier');

//翻牌难度级别 ---- 查询
function getLevels(req, res, next) {
	// 执行Query
	let result = {
		code: 200,
		msg: "查询成功"
	};
	gameOpenCardLevel.findAll().then(function(data){
		result.data = data;
		res.json(result);
	}).catch(function(error){
		result.code = 400;
		result.msg = "查询失败";
		result.error = error;
		res.json(result);
	});
}

//翻牌关卡 ---- 查询
function getBarriers(req, res, next) {
	let result = {
		code: 200,
		msg: "查询成功"
	};
	gameOpenCardBarrier.findAll().then(data => {
		result.data = data;
		res.json(result);
	}).catch(error => {
		result.code = 400;
		result.msg = "查询失败";
		res.json(result);
	})
}

// exports
module.exports = {
	getLevels,
	getBarriers
};