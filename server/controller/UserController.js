const User = require('../model/User');
const DoReturn = require("../model/DoReturn");

class UserController extends DoReturn {
	/*
	* req.query: {id}
	* */
	async userDetail(req, res, next) {
		let code = 200, msg = "查询成功！", data, error;
		let user = await User.findOne({
			where: {id: req.query.id}
		}).catch(error => {
			code = 400;
			msg = "userDetail 查询失败！";
			return this.doReturn(res, {code, msg, error});
		});
		return this.doReturn(res, {code, data: user, msg});
	};

	/*
	* req.body: {login, password, nickname, age, gender}
	* */
	async register(req, res, next) {
		let code = 200, msg, error;
		let params = Object.assign({}, req.body);
		if (!params.login) {
			msg = "账号不能为空！";
			return this.doReturn(res, {code, msg});
		}
		if (!params.password) {
			msg = "密码不能为空！";
			return this.doReturn(res, {code, msg});
		}
		if (!params.nickname) {
			msg = "昵称不能为空！";
			return this.doReturn(res, {code, msg});
		}
		if (!params.age) {
			msg = "年龄不能为空！";
			return this.doReturn(res, {code, msg});
		}
		if (!params.gender) {
			params.gender = "0";
		}
		if (!params.coinNum) {
			params.coinNum = "0";
		}
		if (!params.avatar) {
			params.avatar = "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg";
		}

		let data = await User.findOne({where: {login: params.login}}).catch(err => {
			code = 400;
			msg = "用户是否已存在查询失败！";
			error = err;
			return this.doReturn(res, {code, data, msg, error});
		});

		if (data === null) {
			(async () => {
				let create = await User.create(params).catch(err => {
					code = 400;
					msg = "用户创建失败！";
					error = err;
				});
				code = create ? 200 : 400;
				msg = create ? "注册成功！" : "注册失败，请联系管理员！";
				return this.doReturn(res, {code, data: create, msg, error});
			})();
		} else {
			code = 400;
			msg = "用户已存在，您可以选择直接登录！";
			return this.doReturn(res, {code, data, msg, error});
		}
	};

	/*
	* req.body: {login, password}
	* */
	async login(req, res, next) {
		let code = 200, msg, error;
		let params = Object.assign({}, req.body);
		if (!params.login) {
			msg = "账号不能为空！";
			return this.doReturn(res, {code, data, msg, error});
		}
		if (!params.password) {
			msg = "密码不能为空！";
			return this.doReturn(res, {code, data, msg, error});
		}

		let data = await User.findOne({where: {login: params.login}}).catch(err => {
			code = 400;
			msg = "用户查询失败！";
			error = err;
			return this.doReturn(res, {code, data, msg, error});
		});

		if (data) {
			if (data.password === params.password) {
				msg = "登录成功！";
				return this.doReturn(res, {code, data, msg});
			} else {
				code = 200;
				msg = "账号或密码错误！";
			}
		} else {
			code = 400;
			msg = "用户不存在！";
		}
		return this.doReturn(res, {code, msg, error});
	};
}


module.exports = new UserController();