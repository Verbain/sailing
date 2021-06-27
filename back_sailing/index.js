const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();





const serialization = require('./src/response/Serializations');
const context = require('./src/decorators/Context');
const { getSummonerIdWithName, getMatchId, getMatchResult} = require('./src/Controller/MainController');
const {home, profile, createMatch, team, createTeam, shop} = require('./src/Controller/reactController');
const playerController = require('./src/Controller/playerController');
const teamController = require('./src/Controller/teamController');
const gameController = require('./src/Controller/gameController');
const teamCompositionController = require('./src/Controller/teamCompositionController');
const {handleEvent,createCheckout} = require('./src/Controller/stripeController');
const {MatchEnd, setMatchId, getAllMatchOfTeam} = require('./src/Controller/operationController');

//cron.schedule('*/5 * * * * * ', ()=>{
//    console.log("cron schedule")
//});


app.use(express.json());
app.use(cors());

//NAVIGATIONS
app.get('/',home);
app.get('/profile', profile);
app.get('/createMatch', createMatch);
app.get('/teams', team);
app.get('/teams/createTeam', createTeam);
app.get('/shop', shop);

//STRIPES
app.post('/create-checkout-session',createCheckout);
/*Verify event came from STRIPES*/
app.post('/webhook', bodyParser.raw({type: 'application/json'}),handleEvent);


//RIOT API
app.get('/api/summonername/:username',context(),getSummonerIdWithName,serialization );
app.get('/api/ingame/:nameid',context(),getMatchId,serialization );
app.get('/api/result/:gameid',context(),getMatchResult,serialization );
//PLAYER ROUTING
app.post('/api/newPlayer', playerController.createPlayer);
app.post('/api/updateWallet', playerController.updateWallet1);
app.post('/api/updateWalletDecremente', playerController.updateWalletDecremente);
app.post('/api/updateWalletIncremente', playerController.updateWalletIncremente);
app.post('/api/updateRiotID',playerController.updateRiotID);
app.post('/api/updateProfilePicture',playerController.updateProfilePicture);
app.post('/api/updateOpGg',playerController.updateOpGg);
app.get('/api/players',playerController.getAllPlayers);
app.get('/api/player/:playerId',playerController.getPlayer);
app.get('/api/playerByName/:playerName',playerController.getPlayerByName);
app.get('/api/getPlayerByEmail/:playerEmail',playerController.getPlayerByEmail);
//TEAM ROUTING
app.get('/api/teams',teamController.getAllTeams);
app.get('/api/team/:teamId',teamController.getTeam);
app.post('/api/newTeam',teamController.createTeam);
app.post('/api/updateTeamPicture',teamController.updateTeamPicture);
app.get('/api/removeTeam/:teamId',teamController.removeTeam);
//GAME ROUTING
app.get('/api/games',gameController.getAllGames);
app.get('/api/game/:gameId',gameController.getGame);
app.post('/api/newGame',gameController.createGame);
app.post('/api/updateGameID',gameController.updateGameID);
app.post('/api/updateOpponent',gameController.updateGameOpponent);
app.post('/api/updateResult',gameController.updateGameResult);
app.get('/api/gamesWithOpponent',gameController.getAllGamesWithOpponent);
app.get('/api/gamesWithoutOpponent',gameController.getAllGamesWithoutOpponent);
app.get('/api/removeGame/:gameId',gameController.removeGame);
//TEAMS COMPOSITION ROUTING
app.get('/api/teamComposition',teamCompositionController.getAllPlayers);
app.get('/api/teamComposition/:teamId',teamCompositionController.getPlayerInTeam);
app.get('/api/teamComposition/captain/:teamId',teamCompositionController.getCaptainInTeam);
app.get('/api/removePlayerInTeam/:compositionId',teamCompositionController.removePlayerInTeam);
app.post('/api/addPlayerInTeam',teamCompositionController.addPlayerInTeam);
app.post('/api/addCaptain',teamCompositionController.newTeam);
app.post('/api/updateStatus',teamCompositionController.updateStatus);
app.get('/api/allTeamOfPlayer/:playerId',teamCompositionController.getTeamOfPlayer);



//TEST
app.get('/api/teams_games',gameController.getAllGameWithTeamName);
app.get('/api/teamName/:gameId',gameController.getTeamNameByMatch);
app.get('/api/matchEnd/:gameId',MatchEnd);
app.get('/api/setGameId/:gameId',setMatchId);
app.get('/api/historique/:teamId',gameController.getAllGamesWithResultByTeam);
app.get('/api/historiquePlayer/:playerId',getAllMatchOfTeam);


app.use(express.static(path.join(__dirname, '..', 'front_sailing', 'build')));
app.listen(process.env.PORT, function () {
    console.log("Application listening on port 4000 !");
});