var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('hoorah! praise the sun');
});

module.exports = router;

