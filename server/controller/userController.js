let db = require('../common/basicConnection');
let $sqlCommands = require('../common/sqlCommands');

/**
 * 增加用户Action
 */
function createUser(req, res, next){
	// 获取前台页面传过来的参数
	console.log('query: ', req.query)
	console.log('params: ', req.params)
	let params = req.query || req.params;
	// 执行Query
	db.queryArgs($sqlCommands.tableUser.insertOne,
		[params.name,params.password,params.age, params.mobile],
		function(err, result) {
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
	createUser
};