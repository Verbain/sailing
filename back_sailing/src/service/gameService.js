const gameDAO = require('../dao/gameDAO');

class gameService{
    createGame(gameDTO){
        const {gameName, team, mise} = gameDTO;
        return gameDAO.createGame(gameName, team, mise);
    }
    updateGameId(gameDTO){
        const {id,gameID} = gameDTO;
        return gameDAO.updateGameID(id,gameID)
    }
    updateGameOpponent(gameDTO){
        const {id,opponent} = gameDTO;
        return gameDAO.updateGameOpponent(id,opponent)
    }
    updateGameResult(gameDTO) {
        const {id, result} = gameDTO;
        return gameDAO.updateGameResult(id, result)
    }
}

module.exports = new gameService();