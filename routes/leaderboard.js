let fs = require("fs");
let path = require("path");

async function handle(req,res)
{
    res.send(fs.readFileSync(process.cwd() + "\\static\\leaderboard.html", 'utf8')).status(200);
}

module.exports = handle;