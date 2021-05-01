const sqlite3 = require('sqlite3').verbose();

const OpenDB(){
    let db = new sqlite3.Database('./Storage/database.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the database.');
    });
    return db;
}
export OpenDB
