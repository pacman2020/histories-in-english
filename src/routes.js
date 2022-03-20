'use strict';

const express = require('express');
const { allStories, getByStoryId, createStory, updateStory, destroyStory } = require('./controllers/story');
const { getByUserId, createUser, destroyUser } = require('./controllers/user');
const router = express.Router();

//users
router.get('/user/:id', getByUserId );
router.delete('/user/:id', destroyUser );
router.post('/user', createUser );

//stories
router.get('/story', allStories );
router.get('/story/:id', getByStoryId );
router.post('/story', createStory );
router.put('/story/:id', updateStory );
router.delete('/story/:id', destroyStory );

module.exports = router;