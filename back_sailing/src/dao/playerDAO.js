const db = require('../db/db');

class playerDAO{
    async createPlayer(pseudo, summonerName, opGg, profilePicture){
        const [ret] = await db('players').insert({
            pseudo: pseudo,
            summoner_name: summonerName,
            wallet: 0,
            riot_accoumpt_id: null,
            profile_picture: profilePicture,
            op_gg: opGg,
            player_rank: null
        }).returning('id');

        return ret;
    }
    async updateRiotID(id, riotID){
        const [ret] = await db('players').where({id: id}).update({riot_accoumpt_id: riotID}).returning('id');

        return ret;
    }
    async updateProfilePicture(id, profilePicture){
        const [ret] = await db('players').where({id: id}).update({profile_picture: profilePicture}).returning('id');

        return ret;
    }
    async updateOpGg(id, opGg){
        const [ret] = await db('players').where({id: id}).update({op_gg: opGg}).returning('id');

        return ret;
    }
    async updateWallet1(id , wallet){
        const [ret] = await db('players').where({id: id}).update({wallet: wallet}).returning('id');
        return ret;
    }

}

module.exports = new playerDAO();