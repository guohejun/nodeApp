const GameOpenCardLevel = require('../model/GameOpenCardLevel');
const GameOpenCardBarrier = require('../model/GameOpenCardBarrier');
const UserCardProgress = require('../model/UserCardProgress');
const DoReturn = require("../model/DoReturn");

class GameOpenCardController extends DoReturn {
	/*
	* req.query: {id}
	* */
	async userDetail(req, res, next) {
		let code = 200, msg = "查询成功！", error;
		let data = await User.findOne({
			where: {id: req.query.id}
		}).catch(err => {
			code = 400;
			msg = "查询失败！";
			error = err;
		});
		return this.doReturn(res, {code, data, msg, error});
	};

	//翻牌难度级别 ---- 查询
	async getLevels(req, res, next) {
		let code = 200, msg = "查询成功！";
		let data = await GameOpenCardLevel.findAll({
			"order": [
				["level"]
			]
		}).catch(error => {
			code = 400;
			msg = "查询失败";
			return this.doReturn(res, {code, msg, error});
		});
		return this.doReturn(res, {code, data, msg});
	}

	//翻牌关卡 ---- 根据level和userId查询关卡列表和用户进度
	async getBarriers(req, res, next) {
		const {level, userId} = req.query;
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
		if (barriers) {
			(async () => {
				let cardProgress = await UserCardProgress.findOne({
					where: {
						user_id: userId, level
					},
					raw: true
				}).catch(error => {
					code = 400;
					msg = "UserCardProgress 查询失败！";
					return this.doReturn(res, {code, msg, error});
				});
				return this.doReturn(res, {code, data: barriers, msg, meta: {cardProgress}});
			})();
		} else {
			return this.doReturn(res, {code, data: [], msg});
		}
	}

	//翻牌关卡 ---- 根据barrierId查询关卡详情
	async getBarrierById(req, res, next) {
		const {id} = req.query;
		let code = 200, msg = "查询成功！";
		let data = await GameOpenCardBarrier.findOne({
			where: {id},
			raw: true
		}).catch(error => {
			code = 400;
			msg = "getBarrierById 查询失败！";
			return this.doReturn(res, {code, msg, error});
		});
		return this.doReturn(res, {code, data, msg});
	}

	//翻牌关卡 ---- 根据barrierId查询关卡详情
	async addOrUpdateCardProgress(req, res, next) {
		const params = req.body;
		let code = 200, msg = "操作成功！", data;
		data = await UserCardProgress.upsert(params).catch(error => {
			code = 400;
			msg = "updateCardProgress 操作失败！";
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
				msg = "UserCardProgress 查询失败！";
				return this.doReturn(res, {code, msg, error});
			});
			return this.doReturn(res, {code, data: cardProgress, msg});
		})();
	}

}


module.exports = new GameOpenCardController();