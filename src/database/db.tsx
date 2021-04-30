const sqlite3 = require('sqlite3').verbose();

const OpenDB = () =>
{
    let db = new sqlite3.Database('./Storage/database.db', sqlite3.OPEN_READWRITE, (err: { message: any; }) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the database.');
    });
    return db;
}

const CloseDB = (db: { close: (arg0: (err: { message: any; }) => void) => void; }) =>
{
    db.close((err: { message: any; }) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}



export const Select = (table: any, select: any, where="") =>
{
    let db = OpenDB();

    let query = db.get("SELECT ? FROM ? WHERE ?", select, table, where, (err: { message: any; }) =>{
        if(err)
        {
            console.error(err.message);
            console.log("Error in select statement");
        }
    });

    CloseDB(db);
    return query;
}

export const Delete = (table: any, fields: any, where: any) =>
{
    let db = OpenDB();

    let query = db.exec("UPDATE ? SET ? WHERE ?", table,fields, where, (err: { message: any; }) => {
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


