const express = require('express');
const router = express.Router();
const { addContract, contractList, contractRead, contractUpdate  } = require('../controllers/contract')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/Contract
// @desc  Route Contract
// @access Private
router.post('/contract',auth,addContract);

// @route POST localhost:8888/api/contract-list
// @desc  Route contract List
// @access Private
router.post('/contract-list',auth,contractList);


// @route POST localhost:8888/api/contract
// @desc  Route contract
// @access Private
router.get('/contract-read/:id',auth,contractRead);

// @route POST localhost:8888/api/location-update
// @desc  Route location
// @access Private
router.post('/contract-update',auth,contractUpdate);

// // @route POST localhost:8888/api/location-remove
// // @desc  Route remove
// // @access Private
// router.delete('/location-remove/:id',auth,remove);
module.exports = router;