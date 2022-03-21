'use strict';

const brcrypt = require('bcryptjs');
const model = require("../db/models");
const jwt = require('jsonwebtoken');

module.exports = {
    async login (req, res){
        try {
            const { email, password } = req.body;

            let finduser = await model.User.findOne({ where : { email : email} });

            if (!finduser){
                return res.status(404).json({ msg: 'user not found!'});
            }
            
            const user = await brcrypt.compareSync(password, finduser.dataValues.password);
        
            //rega token

            return res.status(200).json({
                 user: user,
                 token: 'token'
                });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error});
        }
    }
}