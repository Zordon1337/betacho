let db = require("../db");
let md5 = require("md5");
const express = require('express');




function handle(req,res)
{
    var data = req.body;

    var user = md5(data.username);
    var pass = md5(data.password);

    

    var email = md5(data.mail);
    var checkquery = `SELECT * FROM user WHERE Username = "${user}"`;
    db.query(checkquery,function(error, data) 
    {
        if (error) throw error;
        if(data.length > 0)
        {
            res.json({"message":"Unfortunately this username is already taken, try finding something other"});
        } else {
            var query = ("INSERT INTO `user` (`Username`, `Password`, `Rank`, `RS`, `Accuracy`, `CreateDate`, `Mail`) VALUES ('"+user+"', '"+pass+"', '0', '0', '100', '"+Date()+"', '"+email+"');")
            db.query(query,function(error,data){
                if(error)
                {
                    
                    res.json({"message": "Well, it seems something went wrong. contact admin or idk"})
                    throw error;
                } else {
                    res.json({"message":"Registered sucessfully now you can download client and login :)"})
                }
            });
        }
    });
    
    
    
}


module.exports = handle;