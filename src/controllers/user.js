'use strict';

const model = require("../db/models");

module.exports = {
    async getByUserId (req, res){
        let user = await model.User.findByPk(req.params.id);
        delete user.dataValues.password;
        return res.status(200).json({ user: user});
    },
    async createUser (req, res){

    },
    async destroyUser (req, res){

    }
}