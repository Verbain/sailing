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
    console.log(req.params.username);
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

module.exports ={getSummonerIdWithName}
