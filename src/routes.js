const express = require('express');
const { getByUserId, createUser, destroyUser } = require('./controllers/user');
const router = express.Router();

router.get('/user/:id', getByUserId );
router.delete('/user/:id', destroyUser );
router.post('/user', createUser );

module.exports = router;