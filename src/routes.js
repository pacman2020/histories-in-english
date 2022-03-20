'use strict';


const express = require('express');
const { allStories } = require('./controllers/story');
const { getByUserId, createUser, destroyUser } = require('./controllers/user');
const router = express.Router();

//users
router.get('/user/:id', getByUserId );
router.delete('/user/:id', destroyUser );
router.post('/user', createUser );

//stories
router.get('/stories', allStories );

module.exports = router;