const db = require('../db/db');

class playerDAO{
    async createPlayer(pseudo, summonerName, opGg, profilePicture, email){
        const [ret] = await db('players').insert({
            pseudo: pseudo,
            summoner_name: summonerName.toLowerCase(),
            wallet: 0,
            riot_accoumpt_id: null,
            profile_picture: profilePicture,
            op_gg: opGg,
            player_rank: null,
            email:email
        }).returning('id');

        return ret;
    }
    async updateRiotID(name, riotID){
        const [ret] = await db('players').where({summoner_name: name}).update({riot_accoumpt_id: riotID}).returning('id');

        return ret;
    }
    async updateProfilePicture(pseudo, profilePicture){
        const [ret] = await db('players').where({pseudo: pseudo}).update({profile_picture: profilePicture}).returning('id');

        return ret;
    }
    async updateOpGg(pseudo, opGg){
        const [ret] = await db('players').where({pseudo: pseudo}).update({op_gg: opGg}).returning('id');

        return ret;
    }
    async updateWallet1(email){
        const [ret] = await db('players').where({email: email}).increment('wallet',1).returning('id');
        return ret;
    }

}

module.exports = new playerDAO();