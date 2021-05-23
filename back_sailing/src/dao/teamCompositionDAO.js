const db = require('../db/db');

class teamCompositionDAO{
    async newTeam(playerID,teamID){
        const [ret] = await db('teams_compositions').insert({
            id_player: playerID,
            id_team: teamID,
            status:"captain"
        }).returning('id');

        return ret;
    }
    async addPlayerInTeam(playerID,teamID){
        const [ret] = await db('teams_compositions').insert({
            id_player: playerID,
            id_team: teamID,
        }).returning('id');
        return ret;
    }
    async updateStatus(id, status){
        const [ret] = await db('teams_compositions').where({id: id}).update({status: status}).returning('id');
        return ret;
    }

}

module.exports = new teamCompositionDAO();