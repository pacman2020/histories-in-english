'use strict';

const model = require("../db/models");

module.exports = {
    async getByUserId (req, res){
        try {
            let user = await model.User.findByPk(req.params.id);
            // console.log('---', user);

            if (!user){
                return res.status(200).json({ msg: 'usuario nao encontrador!'});
            }

            delete user.dataValues.password;
            return res.status(200).json({ user: user});

        } catch (error) {
            return res.status(500).json({ msg: error});
        }
    },
    async createUser (req, res){
        try {
            const { userName, email, password } = await req.body;

            let findUser = await model.User.findOne({where:{ email: email }});
            
            if (findUser){
                return res.status(200).json({ msg: 'usuario ja registrado no sistema.'});
            }

            //criptografa senhas
            
            let user = await model.User.create({ userName, email, password });
            delete user.dataValues.password, user.dataValues.email;
            console.log('---', user);

            return res.status(201).json({ user: 'user.dataValues.id'});
    
        } catch (error) {
            console.log('--->', error);
            return res.status(500).json({ msg: error});
        }

    },
    async destroyUser (req, res){

    }
}