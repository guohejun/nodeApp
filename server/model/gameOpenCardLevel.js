var db = require('./db');

var gameOpenCardLevel = db.define(
	'game_open_card_level',
	{
		id:{
			filed:'id',
			primaryKey:true,
			type:Sequelize.BIGINT,
			allowNull: false
		},
		level: {
			field: 'level',
			type: Sequelize.STRING,
			allowNull: false
		},
		name: {
			field: 'name',
			type: Sequelize.STRING,
			allowNull: false
		},
		color: {
			field: 'color',
			type: Sequelize.DATE,
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