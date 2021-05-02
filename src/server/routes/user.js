var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();
router.use(bodyParser.json());
var manager =require('../databaseManager');


router.get('/:login/:password', function(req, res) {
    var where="user_name="+req.params.login+" AND password="+req.params.password;
    var koko = manager.Select(req, res, "user", "*", where);
});

router.post('/', function(req, res) {
    var where="user_name="+req.body.login+" AND password="+req.body.password;
    console.log(req);
    console.log(res);
    console.log(req.body);
    console.log(where);
    var koko = manager.Select(req, res, "user", "*", where);
});

module.exports = router;