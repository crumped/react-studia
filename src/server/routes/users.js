const express = require('express');

const router = express.Router();
const manager = require('../databaseManager');

router.get('/', async function(req, res) {

    let rows = await manager.Select("user", "*", "");
    res.send(rows);

});

module.exports = router;
