const config = require('../config')
const express = require('express');
const db = require("../db")
const md5 = require("md5")


async function handle(req,res)
{
    
    var checkquery = `SELECT * FROM user WHERE Username = "${md5(req.query.u)}" && Password = "${req.query.p}"`;
    db.query(checkquery,function(error,data){
        if(error)
        {
            res.status(200).json({"error":"Something went really wrong"});
        } else {
            if(data.length > 0)
            {
                res.status(200).send(req.query.u+"|"+data[0].Rank+"|"+data[0].RS+"|"+data[0].Accuracy);
            } else {
                res.status(403).json({"error":"Ayo wtf? why are you trying to retrive data with wrong user or pass"});
            }
        }
    });
}

module.exports = handle;