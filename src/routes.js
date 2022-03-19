const express = require('express');
const { getByUserId, createUser } = require('./controllers/user');
const router = express.Router();

router.get('/user/:id', getByUserId );
router.post('/user', createUser );

module.exports = router;