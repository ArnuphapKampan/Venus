const express = require('express');
const router = express.Router();
const { createRegister,login,currentUser } = require('../controllers/auth')
//middleware
const { auth } = require('../middleware/auth');
// @route POST localhost:8888/api/register
// @desc  Route register
// @access Public
router.post('/register',auth,createRegister);


// @route POST localhost:8888/api/login
// @desc  Route login
// @access Public
router.post('/login',login);


// @route POST localhost:8888/api/current-user
// @desc  Route current-user
// @access Private
router.post('/current-user',auth,currentUser);


module.exports = router;