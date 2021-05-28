const gameService = require('../service/gameService');
const db = require('../db/db');
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)
class gameController{
    async createGame(req, res){
        try {
            const id = await gameService.createGame(req.body);
            res.status(201).json({
                id:id,
                status:201,
                response:"Game ADD",
                data:req.body
            });
        } catch (err){
            console.error(err);
        }
    }

    async updateGameID(req,res){
        try {
            const id = await gameService.updateGameId(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"Riot Game ID updated",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async updateGameOpponent(req,res){
        try {
            const id = await gameService.updateGameOpponent(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"Game opponent updated",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async updateGameResult(req,res){
        try {
            const id = await gameService.updateGameResult(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"Game result updated",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async getAllGames(req,res){
        try {
            await db.select().table('games').then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
    async getGame(req,res, gameID){
        gameID = req.params.gameId
        try {
            await db.select().table('games').where({id: gameID}).then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
    async getAllGameWithTeamName(req,res){
        try {
            await db.select('games.id','teams.team_name','games.game_name','games.team_1','games.team_2').from('games').leftJoin(db.raw('teams ON games.team_1 = teams.id OR games.team_2 = teams.id')).then(function (ret){
                res.status(201).json(ret);
            })
        } catch (err){
            console.log(err);
        }
    }
    async getTeamNameByMatch(req,res,gameID){
        gameID = req.params.gameId ;
        console.log("DEPUIS LE BACK" + gameID)
        try {
            await db.select('games.id','teams.team_name','games.game_name','games.team_1','games.team_2','teams.id')
                .from('games')
                .leftJoin(db.raw('teams ON games.team_1 = teams.id OR games.team_2 = teams.id'))
                .where('games.id', gameID)
                .then(function (ret){
                res.status(201).json(ret);
            })
        } catch (err){
            console.log(err);
        }
    }
}

module.exports = new gameController();