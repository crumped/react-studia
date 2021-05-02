const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./Storage/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

exports.Insert = function(req, res, table, values){

    let row = db.exec("INSERT INTO ? VALUES ? ", table,value, (err) => {
        if(err){
            console.error(err.message);
            console.log("Error in Insert statement");
        }
        else{
            console.log("Correct insert data");
            res.send("Correct insert");
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.send(rows);
    });
}

