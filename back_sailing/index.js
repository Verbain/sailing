var express = require('express');
var app = express();
const cors = require('cors');
const cron = require('node-cron');

const serialization = require('./src/response/Serializations');
const context = require('./src/decorators/Context');
const { getSummonerIdWithName, getMatchId, getMatchResult} = require('./src/Controller/MainController');

cron.schedule('*/5 * * * * * ', ()=>{
    console.log("cron schedule")
});

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('init !');
});

app.get('/summonername/:username',context(),getSummonerIdWithName,serialization );
app.get('/ingame/:nameid',context(),getMatchId,serialization );
app.get('/result/:gameid',context(),getMatchResult,serialization );

app.listen(4000, function () {
    console.log("Application listening on port 4000 !");
});