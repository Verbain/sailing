const axios = require('axios');
const cron = require('node-cron');
require('dotenv').config();

//Ne jamais mettre ce log en clair
let knex = require('knex')({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL
    }
});

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<AxiosResponse<any>>}
 */
function getSummonerIdWithName(req, res, next){
    return axios.get(`${process.env.URL}/lol/summoner/v4/summoners/by-name/${req.params.username}`,{headers: {
        'X-Riot-Token': `${process.env.API_KEY}`}})
        .then(r=> {
            console.log(r);
            res.return.response= r.data;
            return next();
        })
        .catch(error => {
            res.return ={
                response:{error: error.message}
            };
            console.log(error);
            return next();
        });
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<AxiosResponse<any>>}
 */
function getMatchId(req, res, next){
    return axios.get(`${process.env.URL}/lol/spectator/v4/active-games/by-summoner/${req.params.nameid}`,{headers: {
            'X-Riot-Token': `${process.env.API_KEY}`}})
        .then(r=> {
            console.log(r);
            res.return.response= r.data;
            return next();
        })
        .catch(error => {
            res.return ={
                response:{error: error.message}
            };
            console.log(error);
            return next();
        });
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<AxiosResponse<any>>}
 */
function getMatchResult(req, res, next){
    let end = 0;
    return axios.get(`${process.env.URL}/lol/match/v4/matches/${req.params.gameid}`,{headers: {
            'X-Riot-Token': `${process.env.API_KEY}`}})
        .then(r=> {
            console.log(r);
            res.return.response= r.data;
            end = 1 ;
            return next();
        })
        .catch(error => {
            res.return ={
                response:{error: error.message}
            };
            console.log(error);
            return next();
        });
}

const task = cron.schedule('10 * * * * ', ()=>{
    getMatchResult;
    if (getMatchResult.end === 1){
        console.log("result found task stop")
        task.stop()
    } else {
        console.log("no result found retry in 10mn")
    }
});


module.exports ={getSummonerIdWithName, getMatchId, getMatchResult}
