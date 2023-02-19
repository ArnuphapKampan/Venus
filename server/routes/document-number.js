const express = require('express');
const router = express.Router();
const { documentNumberDuplicate, documentNumberAuto } = require('../controllers/document-number')
//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/document-number-duplicate
// @desc  Route document-number-duplicate
// @access Private
router.post('/document-number-duplicate',documentNumberDuplicate);

// @route POST localhost:8888/api/document-number-auto
// @desc  Route document-number-auto
// @access Private
router.post('/document-number-auto',documentNumberAuto);

module.exports = router;