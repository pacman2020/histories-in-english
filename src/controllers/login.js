'use strict';

const brcrypt = require('bcryptjs');
const model = require("../db/models");
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env');

module.exports = {
    async login (req, res){
        try {
            const { email, password } = req.body;

            let finduser = await model.User.findOne({ where : { email : email} });

            if (!finduser){
                return res.status(404).json({ msg: 'user not found!'});
            }
            
            const user = await brcrypt.compareSync(password, finduser.dataValues.password);
            // console.log('---',user)
            //rega token
            const token = jwt.sign({
                id: finduser.dataValues.id
            }, SECRET_KEY ,{expiresIn: "5h"})

            return res.status(200).json({
                 user: finduser.dataValues.userName,
                 token: token
                });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error});
        }
    }
}