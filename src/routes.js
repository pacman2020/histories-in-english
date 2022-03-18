const express = require('express');
const { getByUserId } = require('./controllers/user');
const router = express.Router();

router.get('/user/:id', getByUserId);

module.exports = router;