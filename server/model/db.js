Sequelize = require('sequelize');
var sequelize = new Sequelize('node_app', 'root', 'Ghj@188128',
	{
		host: '106.12.145.110',
		port: '3306',
		dialect: 'mysql',
		timezone: '+08:00' //timezone 设置时区为东8区
	});

sequelize.sync();
module.exports = sequelize;