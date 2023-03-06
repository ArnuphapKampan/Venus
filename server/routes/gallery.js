const express = require('express');
const router = express.Router();
const { addGallery,galleryList,galleryEnable,galleryRemove,galleryListHomePage } = require('../controllers/gallery')

//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/gallery
// @desc  Route gallery
// @access Private
router.post('/gallery',auth,addGallery);

// @route POST localhost:8888/api/gallery-list
// @desc  Route gallery-list
// @access Private
router.post('/gallery-list',auth,galleryList);

// @route POST localhost:8888/api/gallery-list-homepage
// @desc  Route gallery-list-homepage
// @access Private
router.post('/gallery-list-homepage',galleryListHomePage);

// @route POST localhost:8888/api/gallery-enable
// @desc  Route gallery-enable
// @access Private
router.post('/gallery-enable',auth,galleryEnable);

// @route POST localhost:8888/api/gallery-remove
// @desc  Route remove
// @access Private
router.delete('/gallery-remove/:id',auth,galleryRemove);

module.exports = router;