'use strict';

const express = require('express');
const { login } = require('./controllers/login');
const { allStories, getByStoryId, createStory, updateStory, destroyStory } = require('./controllers/story');
const { getByUserId, createUser, destroyUser } = require('./controllers/user');
const auth = require('./config/auth');

const router = express.Router();

//login
router.post('/login', login );

//users
router.get('/user/:id', auth, getByUserId );
router.delete('/user/:id',auth, destroyUser );
router.post('/user', createUser );

//stories
router.get('/story', allStories );
router.get('/story/:id', getByStoryId );
router.post('/story',auth, createStory );
router.put('/story/:id',auth, updateStory );
router.delete('/story/:id',auth, destroyStory );

module.exports = router;