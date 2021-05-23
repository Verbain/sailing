const express = require('express');
const app = express();
const cors = require('cors');
const cron = require('node-cron');
//const bodyParser = require("body-parser");

const serialization = require('./src/response/Serializations');
const context = require('./src/decorators/Context');
const { getSummonerIdWithName, getMatchId, getMatchResult} = require('./src/Controller/MainController');
const playerController = require('./src/Controller/playerController');

//cron.schedule('*/5 * * * * * ', ()=>{
//    console.log("cron schedule")
//});

app.use(express.json());
app.use(cors());


app.get('/', function (req, res) {
    res.send('init !');
});

app.get('/summonername/:username',context(),getSummonerIdWithName,serialization );
app.get('/ingame/:nameid',context(),getMatchId,serialization );
app.get('/result/:gameid',context(),getMatchResult,serialization );
app.post('/newPlayer', playerController.createPlayer);
app.post('/updateRiotID',playerController.updateRiotID);
app.post('/updateProfilePicture',playerController.updateProfilePicture);
app.post('/updateOpGg',playerController.updateOpGg);
app.get('/players',playerController.getAllPlayers);
app.get('/player/:playerId',playerController.getPlayer)

app.listen(4000, function () {
    console.log("Application listening on port 4000 !");
});