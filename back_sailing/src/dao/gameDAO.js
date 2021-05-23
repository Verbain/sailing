const db = require('../db/db');

class gameDAO{
    async createGame(gameName, team){
        const [ret] = await db('games').insert({
            game_name: gameName,
            team_1: team,
            result: null,
            team_2: null,
            riot_game_id: null,
        }).returning('id');
        return ret;
    }
    async updateGameID(id, gameID){
        const [ret] = await db('games').where({id: id}).update({riot_game_id: gameID}).returning('id');
        return ret;
    }
    async updateGameOpponent(id, opponent){
        const [ret] = await db('games').where({id: id}).update({team_2: opponent}).returning('id');
        return ret;
    }
    async updateGameResult(id, result){
        const [ret] = await db('games').where({id: id}).update({result: result}).returning('id');
        return ret;
    }


}

module.exports = new gameDAO();