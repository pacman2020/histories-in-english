'use strict';

const brcrypt = require('bcryptjs');
const model = require("../db/models");

module.exports = {
    async getByUserId (req, res){
        try {
            let user = await model.User.findByPk(req.params.id);

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

            //password encryption
            let NewPassword = brcrypt.hashSync(password, 10);
            
            let user = await model.User.create({ userName, email, password: NewPassword });
    
            return res.status(201).json({ user: user.dataValues.id });
    
        } catch (error) {
            return res.status(500).json({ msg: error});
        }

    },
    async destroyUser (req, res){
        try {
            let findUser = await model.User.findByPk(req.params.id);

            if (!findUser){
                return res.status(200).json({ msg: 'usuario nao encontrador!'});
            }
            
            await model.User.destroy({ where: { id: findUser.dataValues.id } });

            return res.status(200).json({ msg: 'usuario deletado'});

        } catch (error) {
            return res.status(500).json({ msg: error});
        }
    }
}