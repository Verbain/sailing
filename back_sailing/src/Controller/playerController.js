const playerService = require('../service/playerService');
const db = require('../db/db');
require('dotenv').config();
const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);

class playerController{
    async createPlayer(req, res){
        try {
            const id = await playerService.createPlayer(req.body);
            res.status(201).json({
                id:id,
                status:201,
                response:"player ADD",
                data:req.body
            })
            mixpanel.track('new player created');
        } catch (err){
            console.error(err);
        }
    }

    async updateRiotID(req,res){
        try {
            const id = await playerService.updateRiotId(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"Riot ID updated",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async updateWallet1(req,res){
        try {
            const id = await playerService.updateWallet1(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"wallet incremented",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async updateWalletDecremente(req,res){
        try {
            const id = await playerService.updateWalletDecremente(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"wallet decremented",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async updateProfilePicture(req,res){
        try {
            const id = await playerService.updateProfilePicture(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"Profile picture updated",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async updateOpGg(req,res){
        try {
            const id = await playerService.updateOpGg(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"op.gg updated",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async getAllPlayers(req,res){
        try {
            await db.select().table('players').then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
    async getPlayer(req,res, playerID){
        playerID = req.params.playerId
        try {
            await db.select().table('players').where({id: playerID}).then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
    async getPlayerByName(req,res, playerName){
        playerName = req.params.playerName
        try {
            await db.select().table('players').where({pseudo: playerName}).then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
    async getPlayerByEmail(req,res, playerEmail){
        playerEmail = req.params.playerEmail
        try {
            await db.select().table('players').where({email: playerEmail}).then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }

}

module.exports = new playerController();