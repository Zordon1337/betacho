var db = require("../db")



async function handle(req,res)
{
    db.query("SELECT * FROM user",function(error,data){
        if(error)
        {
            throw error;
        }
        res.status(200).json([{
            "RegisteredUsers": data.length,
            "ServerTime": new Date().toISOString()
        }])
        
    })
    
    res.status(200);
}

module.exports = handle;