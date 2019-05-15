//user_status单一的user_status表SQL-Command
let user = {
	insertOne:'INSERT INTO user (name, password, age, mobile) VALUES(?,?,?,?)',
};

//exports
module.exports = {
	user
};