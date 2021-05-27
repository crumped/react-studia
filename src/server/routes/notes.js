const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());
const manager = require('../databaseManager');

router.post('/share', async function(req, res) {
    // dodaj użytkownika do list udostępnionych plikóœ
    // sprawdz czy juz dodany
    // jezeli nie to dodaj
    const where = "user_id = '" + req.body.userId + "' AND files_id = '" + req.body.fileId + "' and (owner=0)";

    const rows = await manager.Select("user_files", "*", where);

    if(rows.length !== 0)
    {
        res.send('istnieje');
    }
    else
    {
        const values ="('"+req.body.userId+"', '"+req.body.fileId+"', '1', '0')";
        const table ="user_files(user_id, files_id, active, owner)"
        manager.Insert(table, values);
        res.send('dodane');
    }
});

router.post('/undo-share', async function(req, res) {
    const where = "user_id = '" + req.body.userId+ "' AND files_id = '" + req.body.fileId + "'";

    await manager.Update("user_files", "active=0", where);

    res.send({message: "updated"});
});

router.post('/list', async function(req, res) {
    const where = "user_name = '" + req.body.user + "'";


    const user_id = await manager.Select("user", "id_user", where +'');


    if(user_id.length !== 0){
        const where = "user_id = '" + user_id[0]["id_user"] + "'";
        const notes = await manager.Select("user_files", "*", where +'');

        if(notes.length !== 0){
            let myNotesIds = [];
            let sharedToMeIds = [];
            for(let i = 0; i < notes.length; i++){
                if(notes[i]["owner"] === 1){
                    myNotesIds.push(notes[i]["files_id"]);
                } else {
                    sharedToMeIds.push(notes[i]["files_id"]);
                }
            }

            let whereMyNotes = "";
            for(let i = 0; i < myNotesIds.length; i++){
                if(i !== 0 && i !== myNotesIds.length) {
                    whereMyNotes = whereMyNotes + " or "
                }
                whereMyNotes = whereMyNotes + "id_files=" + myNotesIds[i];
            }

            let myNotes = [];
            if(whereMyNotes !== ""){
                myNotes = await manager.Select("files", "*", whereMyNotes +'');
            }

            for(let i = 0; i < myNotes.length; i++){
                const sharedToNotes = await manager.Select("user_files left join user on user_files.user_id = user.id_user", "*", 'files_id=' + myNotes[i]["id_files"] +' and owner=0 and active=1');
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
                sharedNotes = await manager.Select("files", "*", whereSharedToMe +'');
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
