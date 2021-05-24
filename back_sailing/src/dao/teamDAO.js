const db = require('../db/db');

class teamDAO{
    async createTeam(teamName, teamPicture){
        const [ret] = await db('teams').insert({
            team_name: teamName,
            team_wallet: 0,
            team_picture: teamPicture,
        }).returning('id');

        return ret;
    }
    async updateTeamPicture(id, teamPicture){
        const [ret] = await db('teams').where({id: id}).update({team_picture: teamPicture}).returning('id');

        return ret;
    }
}

module.exports = new teamDAO();