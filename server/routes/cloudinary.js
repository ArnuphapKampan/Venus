const express = require('express');
const router = express.Router();
const { cloudinaryImage, cloudinaryRemove, cloudinaryLocationImage, cloudinaryGalleryImage } = require('../controllers/cloudinary')
//middleware
const { auth } = require('../middleware/auth');

// @route POST localhost:8888/api/cloudinary-image
// @desc  Route cloudinary-image
// @access Private
router.post('/cloudinary-image',auth,cloudinaryImage);


// @route POST localhost:8888/api/cloudinary-image
// @desc  Route cloudinary-image
// @access Private
router.post('/cloudinary-location-image',auth,cloudinaryLocationImage);

// @route POST localhost:8888/api/cloudinary-gallery-image
// @desc  Route cloudinary-gallery-image
// @access Private
router.post('/cloudinary-gallery-image',auth,cloudinaryGalleryImage);

// @route POST localhost:8888/api/cloudinary-remove
// @desc  Route cloudinary-remove
// @access Private
router.post('/cloudinary-remove',auth,cloudinaryRemove);

module.exports = router;