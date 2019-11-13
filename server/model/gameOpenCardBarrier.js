var db = require('./db');

var gameOpenCardBarrier = db.define(
	'game_open_card_barrier',
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
		barrier: {
			field: 'barrier',
			type: Sequelize.STRING,
			allowNull: false
		},
		grid_num: {
			field: 'grid_num',
			type: Sequelize.STRING,
			allowNull: false
		},
		max_step: {
			field: 'max_step',
			type: Sequelize.STRING,
			allowNull: false
		},
		headerBackgroundColor: {
			field: 'headerBackgroundColor',
			type: Sequelize.STRING,
			allowNull: false
		},
		headerColor: {
			field: 'headerColor',
			type: Sequelize.STRING,
			allowNull: false
		},
		pageBackgroundColor: {
			field: 'pageBackgroundColor',
			type: Sequelize.STRING,
			allowNull: false
		},
		pageColor: {
			field: 'pageColor',
			type: Sequelize.STRING,
			allowNull: false
		},
		gridBackgroundColor: {
			field: 'gridBackgroundColor',
			type: Sequelize.STRING,
			allowNull: false
		},
		gridColor: {
			field: 'gridColor',
			type: Sequelize.STRING,
			allowNull: false
		},
	},
	{
		freezeTableName: true,
		underscoredAll: true,
		timestamps: false
	}
);

module.exports = gameOpenCardBarrier;