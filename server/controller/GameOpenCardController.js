const GameOpenCardLevel = require('../model/GameOpenCardLevel');
const GameOpenCardBarrier = require('../model/GameOpenCardBarrier');
const UserCardProgress = require('../model/UserCardProgress');
const DoReturn = require("../model/DoReturn");
var ORM = require('../model/db');

class GameOpenCardController extends DoReturn {

	//翻牌难度级别 ---- 查询
	async getLevels(req, res, next) {
		let code = 200, msg = "查询成功！";
		let data = await ORM.query("SELECT cl.id,cl.`name`,cl.color,cl.`level`,count(cb.id) as count FROM card_barrier cb ,  card_level cl where cb.`level_id` = cl.id and cl.id in(3,4,5) group by cl.id,cl.`name`,cl.color,cl.`level`", {raw: true}).catch(error => {
			code = 400;
			msg = "查询失败";
			return this.doReturn(res, {code, msg, error});
		});
		console.log("getLevels data: ", data)
		return this.doReturn(res, {code, data, msg});
	}

	//翻牌关卡 ---- 根据level查询某难度关卡总列表
	async getBarriersByLevel(req, res, next) {
		const {level} = req.query;
		let code = 200, msg = "查询成功！";
		let barriers = await GameOpenCardBarrier.findAll({
			where: {level},
			order: [["barrier"]],
			raw: true
		})
			.catch(error => {
				code = 400;
				msg = "查询失败";
				return this.doReturn(res, {code, msg, error});
			});
		return this.doReturn(res, {code, data: barriers, msg});
	}

	//翻牌关卡 ---- 根据level, barrier查询关卡详情
	async getBarrierByLevelBarrier(req, res, next) {
		const {level, barrier} = req.query;
		let code = 200, msg = "查询成功！";
		let data = await GameOpenCardBarrier.findOne({
			where: {level, barrier},
			raw: true
		}).catch(error => {
			code = 400;
			msg = "查询失败！";
			return this.doReturn(res, {code, msg, error});
		});
		return this.doReturn(res, {code, data: data || {}, msg});
	}

	//翻牌关卡 ---- 根据level和user_id查询用户进度
	async getLevelProgress(req, res, next) {
		const {level, user_id} = req.query;
		let code = 200, msg = "查询成功！";
		let cardProgress = await UserCardProgress.findOne({
			where: {
				user_id,
				level
			},
			raw: true
		}).catch(error => {
			code = 400;
			msg = "查询失败！";
			return this.doReturn(res, {code, msg, error});
		});
		return this.doReturn(res, {code, data: cardProgress || {}, msg});
	}

	//翻牌关卡 ---- 创建或更新进度 {"id":"4","level":"1","user_id":"14","barrier":"2"}
	async addOrUpdateCardProgress(req, res, next) {
		const params = req.body;
		let code = 200, msg = "操作成功！";
		await UserCardProgress.upsert(params).catch(error => {
			code = 400;
			msg = "操作失败！";
			return this.doReturn(res, {code, msg, error});
		});
		// data为true，表示创建 false表示更新
		(async () => {
			let cardProgress = await UserCardProgress.findOne({
				where: {
					user_id: params.user_id,
					level: params.level
				},
				raw: true
			}).catch(error => {
				code = 400;
				msg = "查询失败！";
				return this.doReturn(res, {code, msg, error});
			});
			return this.doReturn(res, {code, data: cardProgress, msg});
		})();
	}

}


module.exports = new GameOpenCardController();