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
    }


}