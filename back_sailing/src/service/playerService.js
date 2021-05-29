const playerDAO = require('../dao/playerDAO');

class playerService{
    createPlayer(playerDTO){
        const {pseudo, summonerName, profilePicture, opGg} = playerDTO;
        return playerDAO.createPlayer(pseudo,summonerName,profilePicture,opGg);
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
    updateWallet1(playerDTO){
        const {id,wallet} = playerDTO
        return playerDAO.updateWallet1(id,wallet)
    }

}

module.exports = new playerService();