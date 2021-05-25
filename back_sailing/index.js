const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')('sk_test_51IucrnF5ZtIQrMXg3TnVTpqR1MXnSVdG78vMOzc9ScXDYZRDvJIF8i889WhLpRBakLaiLfaJVISXOUCZcwr2O2Gz00xuVLBo9h');
const bodyParser = require('body-parser');
require('dotenv').config();
// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = 'whsec_...';




const serialization = require('./src/response/Serializations');
const context = require('./src/decorators/Context');
const { getSummonerIdWithName, getMatchId, getMatchResult} = require('./src/Controller/MainController');
const playerController = require('./src/Controller/playerController');
const teamController = require('./src/Controller/teamController');
const gameController = require('./src/Controller/gameController');
const teamCompositionController = require('./src/Controller/teamCompositionController');

//cron.schedule('*/5 * * * * * ', ()=>{
//    console.log("cron schedule")
//});


app.use(express.json());
app.use(cors());

//STRIPES
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Sailing Coin',
                        images: ['https://www.pinclipart.com/picdir/middle/23-230268_riot-clipart-politics-riot-games-logo-png-transparent.png'],
                    },
                    unit_amount: 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:4000/api/updateWallet/`,
        cancel_url: `http://localhost:4000/cancel`,
    });
    res.json({ id: session.id });
});

/*
app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
    const payload = request.body;
    const sig = request.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    response.status(200);
});*/


app.get('/api/summonername/:username',context(),getSummonerIdWithName,serialization );
app.get('/api/ingame/:nameid',context(),getMatchId,serialization );
app.get('/api/result/:gameid',context(),getMatchResult,serialization );
//PLAYER ROUTING
app.post('/api/newPlayer', playerController.createPlayer);
app.get('/api/updateWallet/:playerID', playerController.updateWallet1);
app.post('/api/updateRiotID',playerController.updateRiotID);
app.post('/api/updateProfilePicture',playerController.updateProfilePicture);
app.post('/api/updateOpGg',playerController.updateOpGg);
app.get('/api/players',playerController.getAllPlayers);
app.get('/api/player/:playerId',playerController.getPlayer)
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
//TEAMS COMPOSITION ROUTING
app.get('/api/teamComposition',teamCompositionController.getAllPlayers);
app.get('/api/teamComposition/:teamId',teamCompositionController.getPlayerInTeam);
app.post('/api/addPlayerInTeam',teamCompositionController.addPlayerInTeam);
app.post('/api/addCaptain',teamCompositionController.newTeam);
app.post('/api/updateStatus',teamCompositionController.updateStatus);


app.use(express.static(path.join(__dirname, '..', 'front_sailing', 'build')));
app.listen(process.env.PORT, function () {
    console.log("Application listening on port 4000 !");
});