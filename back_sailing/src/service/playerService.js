const playerDAO = require('../dao/playerDAO');

class playerService{
    createPlayer(playerDTO){
        const {pseudo, summonerName, profilePicture, opGg, email} = playerDTO;
        return playerDAO.createPlayer(pseudo,summonerName,profilePicture,opGg,email);
    }
    updateRiotId(playerDTO){
        const {name,riotID} = playerDTO;
        return playerDAO.updateRiotID(name,riotID)
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
    updateWalletDecremente(playerDTO){
        const {id,amount} = playerDTO
        return playerDAO.updateWalletDecremente(id,amount)
    }

}

module.exports = new playerService();