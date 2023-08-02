const multer = require("multer");
const express = require('express');
const config = require('./config.js');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const app = express();
const port = config.port
app.listen(port);
console.log("[+] Listening on 0.0.0.0:"+port);
let backend_login = require("./routes/osu-login.js");
let backend_stat = require("./routes/osu-stat.js");
let home = require("./routes/index.js");
let leaderboard = require("./routes/leaderboard.js");
let getclient = require("./routes/client.js");
let register = require("./routes/register.js");
let reguser = require("./routes/backend-register.js");
let osusubmit = require("./routes/osu-submit.js");
let stats = require("./routes/stats.js");
app.set('view engine', 'ejs');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(error, 'uploads/');
      if(error) throw error;
    },
    filename: function (req, file, cb) {
      cb(error, file.originalname);
      if(error) throw error;
    }
});
  
const upload = multer({ storage: storage });
app.use(express.static("./static/src/"))
app.get("/web/osu-login.php",backend_login);
app.get("/web/osu-stat.php",backend_stat);
app.get("/",home);
app.get("/home",home);
app.get("/leaderboard",leaderboard);
app.get("/client",getclient);
app.get("/register",register);
app.post("/api/register",urlencodedParser,reguser);
app.get("/api/stats",stats);
app.use(bodyParser.raw({ type: 'application/octet-stream' }));
/* also todo
app.post("/web/osu-submit.php", upload.single('file'), (req, res) => {
    console.log(req.file);
    res.send('File uploaded successfully.');
  });*/ 


