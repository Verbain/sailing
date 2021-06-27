const axios = require('axios');
require('dotenv').config();

function MatchEnd (req,res,gameId){
    gameId = req.params.gameId
    //get game
    return axios.get(`${process.env.HEADER_PATH}/api/game/${gameId}`).then(r => {
        if(r.data.result === ""){
        //get match result
        axios.get(`${process.env.URL}/lol/match/v4/matches/${r.data.riot_game_id}`,{headers: {
                'X-Riot-Token': `${process.env.API_KEY}`}})
            .then(r_2=> {
            //store the winning team on DB
            if (r_2.data.teams[0].win === "Win"){
                const payload = {
                    id: gameId,
                    result : r_2.data.teams[0].teamId
                }
                axios.post(`${process.env.HEADER_PATH}/api/updateResult`,payload).then(r=>{
                    console.log("game result updated")
                })
                axios.get(`${process.env.HEADER_PATH}/api/teamComposition/captain/${r.data.team_1}`).then(r_3=>{
                    const payload = {
                        id:r_3.data.id_player,
                        amount:(r.data.mise)*2
                    }
                    axios.post(`${process.env.HEADER_PATH}/api/updateWalletIncremente`,payload).then(r_p=>{
                        console.log("wallet incremented");
                    })
                })
                return res.status(201).json({
                    status:201,
                    response:"Match ENDED team 1 WIN",
                })
            } else {
                const payload = {
                    id: gameId,
                    result : r_2.data.teams[1].teamId
                }
                axios.post(`${process.env.HEADER_PATH}/api/updateResult`,payload).then(r=>{
                    console.log("game result updated")
                });
                //get team captain
                axios.get(`${process.env.HEADER_PATH}/api/teamComposition/captain/${r.data.team_2}`).then(r_3=>{
                    const payload = {
                        id:r_3.data.id_player,
                        amount:(r.data.mise)*2
                    }
                    //give price to winning captain
                    axios.post(`${process.env.HEADER_PATH}/api/updateWalletIncremente`,payload).then(r_p=>{
                        console.log("wallet incremented");
                    })
                })
                return res.status(201).json({
                    status:201,
                    response:"Match ENDED team 2 WIN",
                })
            }
        })
        } else {
            return res.status(403).json({
                status:403,
                response:"game still had a result cannot procceed your request"
            })
        }
    }).catch(error => {
        res.return ={
            response:{error: error.message}
        };
        console.log(error);
    });
}

function setMatchId (req,res,gameId){
    gameId = req.params.gameId
    return axios.get(`${process.env.HEADER_PATH}/api/game/${gameId}`).then(r=>{
        axios.get(`${process.env.HEADER_PATH}/api/teamComposition/captain/${r.data.team_1}`).then(r_t1=>{
            axios.get(`${process.env.HEADER_PATH}/api/teamComposition/captain/${r.data.team_2}`).then(r_t2=>{
                axios.get(`${process.env.HEADER_PATH}/api/ingame/${r_t1.data.riot_accoumpt_id}`).then(r_Ct1=> {
                    axios.get(`${process.env.HEADER_PATH}/api/ingame/${r_t2.data.riot_accoumpt_id}`).then(r_Ct2=> {
                        if(r_Ct1.data.response.gameId === r_Ct2.data.response.gameId){
                            const payload = {
                                id: gameId,
                                gameID: r_Ct1.data.response.gameId
                            }
                            axios.post(`${process.env.HEADER_PATH}/api/updateGameID`,payload).then(r_p=>{
                                console.log("gameID updated")
                            })
                            return res.status(201).json({
                                status:201,
                                response: "riot_game_ID SET on game " + gameId
                            })
                        } else {
                            return res.status(403).json({
                                status:403,
                                response:"riot_game_ID of captain didn't match"
                            })
                        }
                    })
                })
            })
        })
    })
}
function getAllMatchOfTeam(req,res,playerId){
    playerId = req.params.playerId
    let result = [];
    axios.get(`${process.env.HEADER_PATH}/api/allTeamOfPlayer/${playerId}`).then(r=>{
        for(let i=0; i<r.data.length ; i++){
            idTeam = r.data[i].id_team
            axios.get(`${process.env.HEADER_PATH}/api/historique/${idTeam}`).then( r_2=>{
                for(let y=0; y<r_2.data.length ; y++){
                    result.push(r_2.data[y]);
                }
            })
        }
    })
        setTimeout(()=>{
            return res.status(201).json({
            status: 201,
            response : result
    })
        },500)

}
module.exports ={MatchEnd, setMatchId, getAllMatchOfTeam}