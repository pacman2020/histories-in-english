'use strict';


const models = require('../db/models');
const brcrypt = require('bcryptjs');

module.exports = {
    async allStories(req, res){
        try {

            let offset  = req.query.offset;
            let limit = req.query.limit;

            let newOffset = offset ? offset : 0;
            let newLimit = limit ? limit : 3;

            const stories = await models.Stories.findAll({ 
                attributes:['id','title','story'],
                order: [['createdAt', 'DESC']],
                offset: newOffset,
                limit: newLimit 
            });

            res.status(200).json({
                 stories : stories,
                 offset,
                 limit
                });

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: error });
        }
    },

    async getByStoryId(req, res){
        try {

            const stories = await models.Stories.findByPk(req.params.id);

            if(!stories){
                res.status(200).json({
                    mmsg: 'story not found.'
                });
            }

            res.status(200).json({
                 stories : stories
                });

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: error });
        }
    },
    async createStory(req, res){
        try {
            const userId = 1;
            const { title, story, active } = await req.body;
            
            let user = await models.User.findByPk(userId);

            if(!user){
                res.status(200).json({ msg: 'user not found'});
            }
            
            const newStory = await models.Stories.create({
                title, story, active, userId
            });

            console.log('--', newStory);

            res.status(201).json({
                 stories : 'created story'
                });

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: error });
        }
    }


}