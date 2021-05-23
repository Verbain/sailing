const playerDAO = require('../dao/playerDAO');

class playerService{
    createPlayer(playerDTO){
        const {pseudo, sumonerName, profilePicture, opGg} = playerDTO;
        return playerDAO.createPlayer(pseudo,sumonerName,profilePicture,opGg);
    }
    updateRiotId(playerDTO){
        const {id,riotID} = playerDTO;
        return playerDAO.updateRiotID(id,riotID)
    }
    updateProfilePicture(playerDTO){
        const {id,profilePicture} = playerDTO;
            return playerDAO.updateProfilePicture(id,profilePicture)
    }
    updateOpGg(playerDTO){
        const {id,opGg} = playerDTO;
        return playerDAO.updateOpGg(id,opGg)
    }

}

module.exports = new playerService();