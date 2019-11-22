var db = require('./db');
var userCardProgress = db.define(
	'user_card_level_barrier',
	{
		id: {
			filed: 'id',
			primaryKey: true,
			autoIncrement: true,
			type: Sequelize.INTEGER,
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
		user_id: {
			field: 'user_id',
			type: Sequelize.CHAR,
			allowNull: false
		}
	},
	{
		freezeTableName: true,
		underscoredAll: true,
		timestamps: false
	}
);

module.exports = userCardProgress;