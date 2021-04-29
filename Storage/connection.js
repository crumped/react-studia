const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('example.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the example database.');
});

db.serialize(() => {
    db.each(`SELECT user_name
           FROM user`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id + "\t" + row.name);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});