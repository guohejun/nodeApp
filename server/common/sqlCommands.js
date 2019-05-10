//user_status单一的user_status表SQL-Command
let user_status = {
	insertOne:'INSERT INTO user_status (username, password, qrcode) VALUES(?,?,?)',
};

//exports
module.exports = {
	user_status: user_status
};