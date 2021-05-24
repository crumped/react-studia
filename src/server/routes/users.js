const express = require('express');

const router = express.Router();
const manager = require('../databaseManager');

router.get('/', function(req, res) {

    let rows = manager.Select("user", "*", "");
    res.send(rows);

});

module.exports = router;
