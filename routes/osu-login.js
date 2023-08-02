const config = require('../config')
const express = require('express');
const db = require('../db');
const md5 = require("md5");

async function handle(req,res) {
    var checkquery = `SELECT * FROM user WHERE Username = "${md5(req.query.username)}" && Password = "${req.query.password}"`; // why encrypt username? why not lol
    db.query(checkquery,function(error,data)
    {
        if(error)
        {
            throw error;
        }
        if(data.length > 0)
        {
            res.status(200).send("1");
        } else {
            res.status(200).send("0");
        }
    });
}


module.exports = handle;