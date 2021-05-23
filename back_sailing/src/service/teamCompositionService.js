const teamCompositionDAO = require('../dao/teamCompositionDAO');

class teamCompositionService{
    newTeam(teamCompositionDTO){
        const {playerID,teamID} = teamCompositionDTO;
        return teamCompositionDAO.newTeam(playerID,teamID);
    }
    addPlayerInTeam(teamCompositionDTO){
        const {playerID,teamID} = teamCompositionDTO;
        return teamCompositionDAO.addPlayerInTeam(playerID,teamID);
    }
    updateStatus(teamCompositionDTO){
        const {id,status} = teamCompositionDTO;
        return teamCompositionDAO.updateStatus(id,status)
    }


}

module.exports = new teamCompositionService();