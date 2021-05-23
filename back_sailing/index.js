const express = require('express');
const app = express();
const cors = require('cors');
const cron = require('node-cron');
//const bodyParser = require("body-parser");

const serialization = require('./src/response/Serializations');
const context = require('./src/decorators/Context');
const { getSummonerIdWithName, getMatchId, getMatchResult} = require('./src/Controller/MainController');
const playerController = require('./src/Controller/playerController');
const teamController = require('./src/Controller/teamController');
const gameController = require('./src/Controller/gameController');

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
//PLAYER ROUTING
app.post('/newPlayer', playerController.createPlayer);
app.post('/updateRiotID',playerController.updateRiotID);
app.post('/updateProfilePicture',playerController.updateProfilePicture);
app.post('/updateOpGg',playerController.updateOpGg);
app.get('/players',playerController.getAllPlayers);
app.get('/player/:playerId',playerController.getPlayer)
//TEAM ROUTING
app.get('/teams',teamController.getAllTeams);
app.get('/team/:teamId',teamController.getTeam);
app.post('/newTeam',teamController.createTeam);
app.post('/updateTeamPicture',teamController.updateTeamPicture);
//GAME ROUTING
app.get('/games',gameController.getAllGames);
app.get('/game/:gameId',gameController.getGame);
app.post('/newGame',gameController.createGame);
app.post('/updateGameID',gameController.updateGameID);
app.post('/updateOpponent',gameController.updateGameOpponent);
app.post('/updateResult',gameController.updateGameResult);

app.listen(4000, function () {
    console.log("Application listening on port 4000 !");
});