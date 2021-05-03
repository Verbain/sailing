const axios = require('axios');
require('dotenv').config();

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<AxiosResponse<any>>}
 */
function getSummonerIdWithName(req, res, next){
    return axios.get(`${process.env.URL}/lol/summoner/v4/summoners/by-name/verbaintim`,{headers: {
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
function getAllRickMortyCharacter(req, res, next){
    return axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(r=> {
            console.log(r);
            res.return.response= r.data;
            return next();
        })
        .catch(error => {
            console.log(error);
            res.return ={
                code: error.response.status,
                response: {error: error.message}
            };
            return next();
        });
}

module.exports ={getSummonerIdWithName, getAllRickMortyCharacter}
