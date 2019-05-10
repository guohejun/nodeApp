var express = require('express');
var router = express.Router()
var goodsController = require('../goodsController');

router.get('/', function (req, res, next) {
	res.render('index', {title: 'GHJ'})
})
router.get('/goodById',function(req,res,next){
	goodsController.goodById(req,res,next);
});

module.exports = router;
