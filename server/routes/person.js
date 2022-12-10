const express = require('express');
const router = express.Router();
const { create,list,read,update,remove,approv } = require('../controllers/person')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/register
// @desc  Route create
// @access Public
// router.post('/person',auth,create);

// @route POST localhost:8888/api/user-list
// @desc  Route list
// @access Public
router.post('/user-list',auth,list);

// @route POST localhost:8888/api/user-approv
// @desc  Route approv
// @access Public
router.post('/user-approv',auth,approv);

// @route POST localhost:8888/api/register
// @desc  Route read
// @access Public
// router.get('/person/:id',auth,read);

// @route POST localhost:8888/api/register
// @desc  Route update
// @access Public
// router.put('/person/:id',auth,update);

// @route POST localhost:8888/api/register
// @desc  Route remove
// @access Public
// router.delete('/person/:id',auth,remove);

module.exports = router;