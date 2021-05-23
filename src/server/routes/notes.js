const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
const manager = require('../databaseManager');

router.post('/share', async function(req, res) {
    const where = "user_name = '" + req.body.login + "' AND password = '" + req.body.password + "'";

    const rows = await manager.Select(req, res, "user", "*", where);

    res.send(rows);
});

router.post('/undo-share', async function(req, res) {
    const where = "user_name = '" + req.body.login + "' AND password = '" + req.body.password + "'";

    const rows = await manager.Select(req, res, "user", "*", where);

    res.send(rows);
});

router.post('/list', async function(req, res) {
    const where = "user_name = '" + req.body.user + "'";


    const user_id = await manager.Select(req, res, "user", "id_user", where +'');


    if(user_id.length !== 0){
        const where = "user_id = '" + user_id[0]["id_user"] + "'";
        const notes = await manager.Select(req, res, "user_files", "*", where +'');

        if(notes.length !== 0){
            let myNotesIds = [];
            let sharedToMeIds = [];
            for(let i = 0; i < notes.length; i++){
                if(notes[i]["owner"] === 1){
                    console.log(notes[i]["owner"]);
                    myNotesIds.push(notes[i]["files_id"]);
                } else {
                    sharedToMeIds.push(notes[i]["files_id"]);
                }
            }

            console.log(myNotesIds);
            console.log(sharedToMeIds);

            let whereMyNotes = "";
            for(let i = 0; i < myNotesIds.length; i++){
                if(i !== 0 && i !== myNotesIds.length) {
                    whereMyNotes = whereMyNotes + " or "
                }
                whereMyNotes = whereMyNotes + "id_files=" + myNotesIds[i];
            }

            let myNotes = [];
            if(whereMyNotes !== ""){
                myNotes = await manager.Select(req, res, "files", "*", whereMyNotes +'');
            }

            for(let i = 0; i < myNotes.length; i++){
                const sharedToNotes = await manager.Select(req, res, "user_files left join user on user_files.user_id = user.id_user", "*", 'files_id=' + myNotes[i]["id_files"] +' and owner=0 and active=1');
                console.log(sharedToNotes);
                myNotes[i]["shared"] = sharedToNotes;
            }

            let whereSharedToMe = "";
            for(let i = 0; i < sharedToMeIds.length; i++){
                if(i !== 0 && i !== sharedToMeIds.length) {
                    whereSharedToMe = whereSharedToMe + " or "
                }
                whereSharedToMe = whereSharedToMe + "id_files=" + sharedToMeIds[i];
            }

            let sharedNotes = [];
            if(whereSharedToMe !== ""){
                sharedNotes = await manager.Select(req, res, "files", "*", whereSharedToMe +'');
            }


            res.send({"myNotes": myNotes, "theirNotes": sharedNotes});
        } else {
            res.send([]);
        }
    }
    else {
        res.send([]);
    }
});

module.exports = router;
