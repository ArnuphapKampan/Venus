const express = require('express');
const router = express.Router();
const { logList } = require('../controllers/log')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/log-list
// @desc  Route log list
// @access Private
router.post('/log-list',auth,logList);

module.exports = router;