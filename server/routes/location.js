const express = require('express');
const router = express.Router();
const { addLocation,locationList,locationEnable } = require('../controllers/location')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/location
// @desc  Route location
// @access Private
router.post('/location',auth,addLocation);

// @route POST localhost:8888/api/location-list
// @desc  Route location List
// @access Private
router.post('/location-list',auth,locationList);

// @route POST localhost:8888/api/location-enable
// @desc  Route Enable
// @access Private
router.post('/location-enable',auth,locationEnable);
module.exports = router;