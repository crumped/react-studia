const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./Storage/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

const Insert = (table: any, value: any, ...args: any[]) =>
{
    let db = OpenDB();

    db.exec("INSERT INTO ? VALUES(?)", table, value, (err: { message: any; }) =>{
        if(err) {
            console.error(err.message);
            console.log("Error in insert to database");
        }
    });

    CloseDB(db);
}

db.close()



app.listen(process.env.PORT || 8080);