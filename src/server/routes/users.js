var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();
var manager =require('../databaseManager');

router.get('/', function(req, res) {

    var koko = manager.Select(req, res, "user", "*", "");

});

router.post('/', function(req, res) {
    var koko = manager.Select(req, res, "*", "user", "");
    return koko.json();
});

module.exports = router;