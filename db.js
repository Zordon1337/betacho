let mysql = require('mysql');
let config = require('./config.js');


let db = mysql.createConnection({
    host : config.dbhost,
    database: config.database,
    user: config.dbuser,
    password: config.dbpassword
});
db.connect(function(error){
    if(error)
    {
        throw error;
    }
    else {
        console.log("[+] Succesfully connected to db");
    }
});

module.exports = db;