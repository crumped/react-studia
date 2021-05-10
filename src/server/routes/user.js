const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
const manager = require('../databaseManager');


router.get('/:login/:password', function(req, res) {
    const where = "user_name=" + req.params.login + " AND password=" + req.params.password;
    const koko = manager.Select(req, res, "user", "*", where);
});

router.post('/', async function(req, res) {
    const where = "user_name = '" + req.body.login + "' AND password = '" + req.body.password + "'";

    const rows = await manager.Select(req, res, "user", "*", where);

    res.send(rows);
});

module.exports = router;
