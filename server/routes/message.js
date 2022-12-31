const express = require('express');
const router = express.Router();
const { sendMessage,listMessage,unreadMessage,noteMessage } = require('../controllers/message')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/load-marker
// @desc  Route Load Marker
// @access Private
router.post('/send-message',sendMessage);

// @route POST localhost:8888/api/message-list
// @desc  Route Message list
// @access Private
router.post('/message-list',auth,listMessage);

// @route POST localhost:8888/api/message-list-unread
// @desc  Route Unread Message list 
// @access Private
router.post('/message-list-unread',auth,unreadMessage);

// @route POST localhost:8888/api/message-note
// @desc  Route Message Note 
// @access Private
router.post('/message-note',auth,noteMessage);
module.exports = router;