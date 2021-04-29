const sqlite3 = require('sqlite3').verbose();

export const OpenDB = () =>
{
    let db = new sqlite3.Database('./database/database.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the database.');
    });
    return db;
}

export const CloseDB = (db) =>
{
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

export const Insert = (table, value, ...args) =>
{
    let db = OpenDB();

    db.exec("INSERT INTO ? VALUES(?)", table, value, (err) =>{
        if(err) {
            console.error(err.message);
            console.log("Error in insert to database");
        }
    });

    CloseDB(db);
}

export const Select = (table, select, where="") =>
{
    let db = OpenDB();

    let query = db.get("SELECT ? FROM ? WHERE ?", select, table, where, (err) =>{
        if(err)
        {
            console.error(err.message);
            console.log("Error in select statement");
        }
    });

    CloseDB(db);
    return query;
}

export const Delete = (table, fields, where) =>
{
    let db = OpenDB();

    let query = db.exec("UPDATE ? SET ? WHERE ?", table,fields, where, (err) => {
        if(err){
            console.error(err.message);
            console.log("Error in Delete statement");
        }
        else{
            console.log("Properly Deleted");
        }
    });

    CloseDB(db);
}


