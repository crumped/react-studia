const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
const manager = require('../databaseManager');

router.post('/add', async function(req, res){

    const where = "user_name = '" + req.body.user + "'";

    const user_id = await manager.Select("user", "id_user", where +'');

    if(user_id !== 0)
    {
        const note = req.body.notes;
        console.log(note);
        let values = "('"+note+"','1')";
        let table ="files(content,active)";
        manager.Insert(table, values);
        const filesCount = await manager.Select('files');
        //console.log(filesCount);
        console.log(user_id)
        if(filesCount.length !== 0)
        {
            values ="('"+filesCount.length+"','"+user_id[0]['id_user']+"','1','1')";
            table = "user_files(files_id,user_id,active,owner)";
            manager.Insert(table, values);
        }
    }
})

module.exports = router;