const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./Storage/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

exports.Insert = function(table, value){

    let query = db.exec("INSERT INTO ? VALUES ? ", table,value, (err) => {
        if(err){
            console.error(err.message);
            console.log("Error in Delete statement");
        }
        else{
            console.log("Properly Deleted");
        }
    });
}

exports.Select = function(req, res, table, select="*", where=""){

    var rows = db.all(`SELECT ${select} FROM ${table}`, (err,rows) => {
        if (err) {
                console.error(err.message);
                console.log("Error in select");
        }
        console.log(rows);
        res.send(rows);
    });
}

