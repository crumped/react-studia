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
        const title = req.body.title;
        console.log(note);
        let values = "('"+title+"','"+note+"','1')";
        let table ="files(title,content,active)";
        let resp = await manager.Insert(table, values);
        const filesCount = await manager.Select('files');
        //console.log(filesCount);
        console.log(user_id)
        if(filesCount.length !== 0)
        {
            values ="('"+filesCount.length+"','"+user_id[0]['id_user']+"','1','1')";
            table = "user_files(files_id,user_id,active,owner)";
            await manager.Insert(table, values);
            res.send({"fileId": resp});
        } else {
            res.send("error");
        }
    } else {
        res.send("error");
    }
})

router.post('/', async function(req, res) {
    const username = req.body.user;
    const fileId = req.body.fileId;
    const whereUser = "user_name = '" + username + "'";

    const user_id = await manager.Select("user", "id_user", whereUser +'');

    if(user_id.length !== 0){
        const whereFilesBelong = "user_id = '" + user_id[0]['id_user'] + "' AND files_id = '" + fileId + "'";

        const fileBelongTo = await manager.Select("user_files", "*", whereFilesBelong);

        if(fileBelongTo.length !== 0){
            const whereFiles = "id_files = '" + fileId + "' and active=1";
            const rows = await manager.Select("files", "*", whereFiles);
            res.send(rows);
        } else {
            res.send([]);
        }
    } else {
        res.send([]);
    }


    // res.send(rows);
});

router.post('/delete', async function(req, res) {
    const username = req.body.user;
    const fileId = req.body.fileId;
    const whereUser = "user_name = '" + username + "'";
    const user_id = await manager.Select("user", "id_user", whereUser +'');

    if(user_id.length !== 0){

        const whereUserFiles = "user_id = '" + user_id[0]["id_user"] + "' and files_id = '"+ fileId +"'";
        const file = await manager.Select("user_files", "*", whereUserFiles +'');

        if(file.length !== 0){
            const where = "id_files = '" + fileId + "'";

            await manager.Update("files", "active=0", where);

            res.send({message: "updated"});
        } else {
            res.send("error");
        }
    } else {
        res.send("error");
    }
});

module.exports = router;
