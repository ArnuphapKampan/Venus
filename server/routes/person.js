const express = require('express');
const router = express.Router();
const { create,list,read,update,remove } = require('../controllers/person')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/register
// @desc  Route create
// @access Public
router.post('/person',auth,create);

// @route POST localhost:8888/api/register
// @desc  Route list
// @access Public
router.get('/person',auth,list);

// @route POST localhost:8888/api/register
// @desc  Route read
// @access Public
router.get('/person/:id',auth,read);

// @route POST localhost:8888/api/register
// @desc  Route update
// @access Public
router.put('/person/:id',auth,update);

// @route POST localhost:8888/api/register
// @desc  Route remove
// @access Public
router.delete('/person/:id',auth,remove);

module.exports = router;