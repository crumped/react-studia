const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./Storage/database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the database.');
});

const db_query = async function (query) {
    return new Promise(function (resolve, reject) {
        db.all(query, (err, rows) => {
            if (err) {
                console.error(err.message);
                console.log("Error in select");
                reject("error");

            }

            resolve(rows);
        });
    });
};

exports.Insert = function(table, values){

    console.log("inside insert");
    console.log("Insert into " +table+" values"+values);
    db.exec(`INSERT INTO ${table} VALUES${values};`, (err) => {
        if(err){
            console.error(err.message);
            console.log("Error in Insert statement");
        }
        else{
            console.log("Correct insert data");
        }
    });
}

exports.Select = async function(table, select="*", where=""){
    if(where !== ""){
        where = "WHERE " + where;
    }
    let query = `SELECT ${select} FROM ${table} ${where};`;
    console.log(query);
    return await db_query(query);
}


exports.Update = function(table, values, where=""){
    if(where !== ""){
        where = "WHERE " + where;
    }
    console.log("update");
    let query = `UPDATE ${table} SET ${values} ${where};`;
    console.log(query);
    db.exec(query, (err) => {
        if(err){
            console.error(err.message);
            console.log("Error in Update statement");
        }
        else{
            console.log("Updated data");
        }
    });
}
