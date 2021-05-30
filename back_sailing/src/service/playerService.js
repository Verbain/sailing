const playerDAO = require('../dao/playerDAO');

class playerService{
    createPlayer(playerDTO){
        const {pseudo, summonerName, profilePicture, opGg, email} = playerDTO;
        return playerDAO.createPlayer(pseudo,summonerName,profilePicture,opGg,email);
    }
    updateRiotId(playerDTO){
        const {id,riotID} = playerDTO;
        return playerDAO.updateRiotID(id,riotID)
    }
    updateProfilePicture(playerDTO){
        const {pseudo,profilePicture} = playerDTO;
            return playerDAO.updateProfilePicture(pseudo,profilePicture)
    }
    updateOpGg(playerDTO){
        const {pseudo,opGg} = playerDTO;
        return playerDAO.updateOpGg(pseudo,opGg)
    }
    updateWallet1(playerDTO){
        const {email} = playerDTO
        return playerDAO.updateWallet1(email)
    }

}

module.exports = new playerService();