let db = require('../common/basicConnection');
let $sqlCommands = require('../common/sqlCommands');

//翻牌难度级别 ---- 查询
function getLevels(req, res, next){
	// 执行Query
	db.query($sqlCommands.tableOpenCardLevel.getList,
		function(err, result) {
			// console.log("getLevels result: ", result)
			if(!err){
				let data = JSON.parse(JSON.stringify(result));
				result = {
					code: 200,
					msg:'操作成功',
					data
				}
			}
			// 以json形式，把操作结果返回给前台页面
			db.doReturn(res, result);
		}
	);
}

//翻牌难度级别 ---- 新增
function createLevel(req, res, next){
	console.log("createLevel invoked")
	let params = req.body;
	console.log("createLevel params: ", req)
	// 执行Query
	db.queryArgs($sqlCommands.tableOpenCardLevel.insertOne,
		[params.level,params.name, params.color],
		function(err, result) {
			console.log("createLevel result: ", result)
			if(!err){
				result = {
					code: 200,
					msg:'操作成功'
				};
			}
			// 以json形式，把操作结果返回给前台页面
			db.doReturn(res, result);
		}
	);
}

//翻牌关卡 ---- 查询
function getBarriers(req, res, next){
	// 执行Query
	db.query($sqlCommands.tableOpenCardBarrier.getList,
		function(err, result) {
			// console.log("getLevels result: ", result)
			if(!err){
				let data = JSON.parse(JSON.stringify(result));
				result = {
					code: 200,
					msg:'操作成功',
					data
				}
			}
			// 以json形式，把操作结果返回给前台页面
			db.doReturn(res, result);
		}
	);
}

//翻牌关卡 ---- 新增
function createBarriers(req, res, next){
	console.log("createLevel invoked")
	let params = Object.values(req.body);
	console.log("createLevel params: ", params)
	// 执行Query
	db.queryArgs($sqlCommands.tableOpenCardBarrier.insertOne,
		params,
		function(err, result) {
			console.log("createLevel result: ", result)
			if(!err){
				result = {
					code: 200,
					msg:'操作成功'
				};
			}
			// 以json形式，把操作结果返回给前台页面
			db.doReturn(res, result);
		}
	);
}

// exports
module.exports = {
	createLevel,
	getLevels,
	getBarriers,
	createBarriers
};