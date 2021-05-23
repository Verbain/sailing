const teamDAO = require('../dao/teamDAO');

class teamService{
    createPlayer(teamDTO){
        const {teamName, teamPicture} = teamDTO;
        return teamDAO.createTeam(teamName, teamPicture);
    }

    updateTeamPicture(teamDTO){
        const {id,teamPicture} = teamDTO;
        return teamDAO.updateTeamPicture(id,teamPicture)
    }


}

module.exports = new teamService();