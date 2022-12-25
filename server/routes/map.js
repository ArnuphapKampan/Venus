const express = require('express');
const router = express.Router();
const { loadMarker } = require('../controllers/map')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/load-marker
// @desc  Route Load Marker
// @access Private
router.post('/load-marker',auth,loadMarker);
;
module.exports = router;