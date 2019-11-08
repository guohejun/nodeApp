//user_status单一的user_status表SQL-Command
let tableUser = {
	insertOne:'INSERT INTO user (name, age, login, password) VALUES(?,?,?,?)',
};
let tableOpenCardLevel = {
	insertOne:'INSERT INTO game_open_card_level (level, name, color) VALUES(?,?,?)',
	getList:'SELECT * FROM game_open_card_level',
};
let tableOpenCardBarrier = {
	insertOne:'INSERT INTO game_open_card_barrier (barrier, grid_num, max_step, headerBackgroundColor, headerColor, pageBackgroundColor, pageColor, gridBackgroundColor, gridColor) VALUES(?,?,?,?,?,?,?,?,?)',
	getList:'SELECT * FROM game_open_card_barrier',
};

//exports
module.exports = {
	tableUser,
	tableOpenCardLevel,
	tableOpenCardBarrier
};