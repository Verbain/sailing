const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();





const serialization = require('./src/response/Serializations');
const context = require('./src/decorators/Context');
const { getSummonerIdWithName, getMatchId, getMatchResult} = require('./src/Controller/MainController');
const playerController = require('./src/Controller/playerController');
const teamController = require('./src/Controller/teamController');
const gameController = require('./src/Controller/gameController');
const teamCompositionController = require('./src/Controller/teamCompositionController');
const {handleEvent,createCheckout} = require('./src/Controller/stripeController')

//cron.schedule('*/5 * * * * * ', ()=>{
//    console.log("cron schedule")
//});


app.use(express.json());
app.use(cors());


//STRIPES
app.post('/create-checkout-session',createCheckout);
/*Verify event came from STRIPRES*/
app.post('/webhook', bodyParser.raw({type: 'application/json'}),handleEvent);



app.get('/api/summonername/:username',context(),getSummonerIdWithName,serialization );
app.get('/api/ingame/:nameid',context(),getMatchId,serialization );
app.get('/api/result/:gameid',context(),getMatchResult,serialization );
//PLAYER ROUTING
app.post('/api/newPlayer', playerController.createPlayer);
app.post('/api/updateWallet', playerController.updateWallet1);
app.post('/api/updateRiotID',playerController.updateRiotID);
app.post('/api/updateProfilePicture',playerController.updateProfilePicture);
app.post('/api/updateOpGg',playerController.updateOpGg);
app.get('/api/players',playerController.getAllPlayers);
app.get('/api/player/:playerId',playerController.getPlayer)
app.get('/api/playerByName/:playerName',playerController.getPlayerByName)
//TEAM ROUTING
app.get('/api/teams',teamController.getAllTeams);
app.get('/api/team/:teamId',teamController.getTeam);
app.post('/api/newTeam',teamController.createTeam);
app.post('/api/updateTeamPicture',teamController.updateTeamPicture);
//GAME ROUTING
app.get('/api/games',gameController.getAllGames);
app.get('/api/game/:gameId',gameController.getGame);
app.post('/api/newGame',gameController.createGame);
app.post('/api/updateGameID',gameController.updateGameID);
app.post('/api/updateOpponent',gameController.updateGameOpponent);
app.post('/api/updateResult',gameController.updateGameResult);
app.get('/api/gamesWithOpponent',gameController.getAllGamesWithOpponent);
app.get('/api/gamesWithoutOpponent',gameController.getAllGamesWithoutOpponent);
//TEAMS COMPOSITION ROUTING
app.get('/api/teamComposition',teamCompositionController.getAllPlayers);
app.get('/api/teamComposition/:teamId',teamCompositionController.getPlayerInTeam);
app.post('/api/addPlayerInTeam',teamCompositionController.addPlayerInTeam);
app.post('/api/addCaptain',teamCompositionController.newTeam);
app.post('/api/updateStatus',teamCompositionController.updateStatus);
app.get('/api/teamComposition/:playerId',teamCompositionController.getTeamOfPlayer)


//TEST
app.get('/api/teams_games',gameController.getAllGameWithTeamName);
app.get('/api/teamName/:gameId',gameController.getTeamNameByMatch);


app.use(express.static(path.join(__dirname, '..', 'front_sailing', 'build')));
app.listen(process.env.PORT, function () {
    console.log("Application listening on port 4000 !");
});