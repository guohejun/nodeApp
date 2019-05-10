var mysql = require('mysql')
var conf = require('../conf/db')
var util = require('../util/util')
var $sql = require('./sql')

//创建连接池
var pool = mysql.createPool(util.extend({}, conf.mysql))

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, result) {
	if (typeof result === 'undefined') {
		res.json({
			code: '1',
			msg: '操作失败'
		});
	} else {
		res.json(result);
	}
};

var api = {
	//查找商品
	goodById: function (req, res, next) {
		var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
		var data = {}
		console.log(id, typeof id)
		if (isNaN(id)) {
			data.code = 400;
			data.msg = '非法id值'
			jsonWrite(res, data)
		} else {
			pool.getConnection(function (err, connection) {
				console.log('[Update 16:24:00]')
				if(err){
					console.log('[Pool GetConnection Error] - ',err.message)
					data.code = 500
					data.msg = '服务器错误！'
					jsonWrite(res, data)
				} else {
					console.log('[Connection Ok]')
					var sqlStr = id ? $sql.goodById : $sql.goodAll
					connection.query(sqlStr, id, function (err, result) {
						data.code = 200
						data.msg = '查询成功'
						data.data = result
						jsonWrite(res, data)
						connection.release()
					})
				}
			})
		}
	}
}
module.exports = api

