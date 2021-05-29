const teamCompositionService = require('../service/teamCompositionService');
const db = require('../db/db');
require('dotenv').config();
const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);

class teamCompositionController{
    async newTeam(req, res){
        try {
            const id = await teamCompositionService.newTeam(req.body);
            res.status(201).json({
                id:id,
                status:201,
                response:"captain add",
                data:req.body
            });
        } catch (err){
            console.error(err);
        }
    }

    async addPlayerInTeam(req, res){
        try {
            const id = await teamCompositionService.addPlayerInTeam(req.body);
            res.status(201).json({
                id:id,
                status:201,
                response:"player add",
                data:req.body
            })
            mixpanel.track("player added in team");
        } catch (err){
            console.error(err);
        }
    }
    async updateStatus(req,res){
        try {
            const id = await teamCompositionService.updateStatus(req.body);
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
            await db.select().table('teams_compositions').then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
    async getPlayerInTeam(req,res, teamID){
        teamID = req.params.teamId
        try {
            await db.select().table('teams_compositions').where({id_team: teamID}).then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
}

module.exports = new teamCompositionController();