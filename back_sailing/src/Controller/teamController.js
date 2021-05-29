const teamService = require('../service/teamService');
const teamCompositionService= require('../service/teamCompositionService');
const db = require('../db/db');

class teamController{
    async createTeam(req, res){
        try {
            const id = await teamService.createPlayer(req.body);
            res.status(201).json({
                id:id,
                status:201,
                response:"team ADD",
                data:req.body
            });
        } catch (err){
            console.error(err);
        }
    }
    async updateTeamPicture(req,res){
        try {
            const id = await teamService.updateTeamPicture(req.body);
            res.status(201).json({
                changeOn:id,
                status:201,
                response:"team picture updated",
                data:req.body
            });
        } catch (err){
            console.log(err);
        }
    }
    async getAllTeams(req,res){
        try {
            await db.select().table('teams').then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
    async getTeam(req,res, teamID){
        teamID = req.params.teamId
        try {
            await db.select().table('teams').where({id: teamID}).then(function (ret){
                res.status(201).json(ret);
            });
        } catch (err){
            console.log(err);
        }
    }
}

module.exports = new teamController();