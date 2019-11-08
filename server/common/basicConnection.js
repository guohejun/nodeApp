let mysql = require('mysql');
let $dbConfig = require('../conf/db');

// 使用连接池，避免开太多的线程，提升性能
let pool = mysql.createPool($dbConfig.mysql);

/**
 * 对query执行的结果自定义返回JSON结果
 */
function responseDoReturn(res, result, resultJSON) {
	console.log("responseDoReturn: ", result)
	if(typeof result === 'undefined') {
		res.json({
			code:'400',
			msg: 'failed to do'
		});
	} else {
		res.json(result);
	}
}

/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback) {
	console.log("query function sql: ", sql)
	pool.getConnection(function (err, connection) {
		connection.query(sql, function (err, rows) {
			// console.log("query function rows: ", rows)
			callback(err, rows);
			//释放链接
			connection.release();
		});
	});
}

/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql,args, callback) {
	console.log("queryArgs function sql: ", sql)
	pool.getConnection(function (err, connection) {
		connection.query(sql, args, function (err, rows) {
			callback(err, rows);
			//释放链接
			connection.release();
		});
	});
}

module.exports = {
	query: query,
	queryArgs: queryArgs,
	doReturn: responseDoReturn
}