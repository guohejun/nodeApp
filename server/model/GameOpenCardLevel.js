var db = require('./db');

var gameOpenCardLevel = db.define(
	'card_level',
	{
		id:{
			filed:'id',
			primaryKey:true,
			type:Sequelize.INTEGER,
			allowNull: false
		},
		level: {
			field: 'level',
			type: Sequelize.CHAR,
			allowNull: false
		},
		name: {
			field: 'name',
			type: Sequelize.CHAR,
			allowNull: false
		},
		color: {
			field: 'color',
			type: Sequelize.CHAR,
			allowNull: false
		},
	},
	{
		freezeTableName: true,
		underscoredAll: true,
		timestamps: false
	}
);

module.exports = gameOpenCardLevel;