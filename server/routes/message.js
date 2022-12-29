const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/message')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/load-marker
// @desc  Route Load Marker
// @access Private
router.post('/send-message',sendMessage);
;
module.exports = router;