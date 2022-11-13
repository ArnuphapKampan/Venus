const express = require('express');
const router = express.Router();
const { createRegister,login } = require('../controllers/auth')

// @route POST localhost:8888/api/register
// @desc  Route register
// @access Public
router.get('/register',createRegister);


// @route POST localhost:8888/api/login
// @desc  Route login
// @access Public
router.get('/login',login);


module.exports =router;