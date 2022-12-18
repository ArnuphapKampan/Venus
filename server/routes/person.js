const express = require('express');
const router = express.Router();
const { list,read,remove,approv,changePassword } = require('../controllers/person')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/user-list
// @desc  Route list
// @access Private
router.post('/user-list',auth,list);

// @route POST localhost:8888/api/user-approv
// @desc  Route approv
// @access Private
router.post('/user-approv',auth,approv);

// @route POST localhost:8888/api/change-user-password
// @desc  Route change password
// @access Private
router.post('/change-user-password',auth,changePassword);

// @route POST localhost:8888/api/register
// @desc  Route read
// @access Private
router.get('/person/:id',auth,read);

// @route POST localhost:8888/api/user-remove
// @desc  Route remove
// @access Private
router.delete('/user-remove/:id',auth,remove);

module.exports = router;