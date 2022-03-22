'use strict';

const jwt  = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env');

const auth = async (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader){
        return response.status(401).json({ message: 'token required!' })
    }
    const toke = authHeader.split(' ')[1];
    
    try {

        const data = await jwt.verify(toke, SECRET_KEY);
        const { id } = data;

        req.userId = id;

        return next();
        
    } catch (error) {
        return res.status(401).json({ message: 'authentication failure' })
    }
};

module.exports = auth;