class DoReturn {
	doReturn(res, result) {
		console.log(result)
		if (typeof result === "object" && result !== null) {
			for (let key in result) {
				if (!result[key]) delete result[key]
			}
			res.json(result);
		} else {
			res.json({
				code:'400',
				msg: 'DoReturn failed'
			});
		}
	}
}

module.exports = DoReturn;