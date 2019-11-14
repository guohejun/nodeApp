var db = require('./db');
var user = db.define(
	'user',
	{
		id:{
			filed: 'id',
			primaryKey:true,
			autoIncrement: true,
			type:Sequelize.INTEGER,
			allowNull: false
		},
		nickname: {
			field: 'nickname',
			type: Sequelize.CHAR,
			allowNull: false
		},
		age: {
			field: 'age',
			type: Sequelize.CHAR,
			allowNull: false
		},
		gender: {
			field: 'gender',
			type: Sequelize.CHAR,
			allowNull: false
		},
		login: {
			field: 'login',
			type: Sequelize.CHAR,
			allowNull: false
		},
		password: {
			field: 'password',
			type: Sequelize.CHAR,
			allowNull: false
		},
	},
	{
		freezeTableName: true
	}
);

module.exports = user;