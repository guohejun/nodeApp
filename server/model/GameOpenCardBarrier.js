var db = require('./db');

var gameOpenCardBarrier = db.define(
	'card_barrier',
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
		barrier: {
			field: 'barrier',
			type: Sequelize.CHAR,
			allowNull: false
		},
		grid_num: {
			field: 'grid_num',
			type: Sequelize.CHAR,
			allowNull: false
		},
		max_step: {
			field: 'max_step',
			type: Sequelize.CHAR,
			allowNull: false
		},
		headerBackgroundColor: {
			field: 'headerBackgroundColor',
			type: Sequelize.CHAR,
			allowNull: false
		},
		headerColor: {
			field: 'headerColor',
			type: Sequelize.CHAR,
			allowNull: false
		},
		pageBackgroundColor: {
			field: 'pageBackgroundColor',
			type: Sequelize.CHAR,
			allowNull: false
		},
		pageColor: {
			field: 'pageColor',
			type: Sequelize.CHAR,
			allowNull: false
		},
		gridBackgroundColor: {
			field: 'gridBackgroundColor',
			type: Sequelize.CHAR,
			allowNull: false
		},
		gridColor: {
			field: 'gridColor',
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

module.exports = gameOpenCardBarrier;