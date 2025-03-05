const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideController = require('../Controllers/Ride.controller');


router.post('/create',
    body('userId').isString().isLength({min: 3, max: 24}).withMessage('Invalid User ID'),
    body('pickup').isString().isLength({min: 3}).withMessage('Invalid Pickup Location'),
    body('destination').isString().isLength({min: 3}).withMessage('Invalid Destination Location'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid Vehicle Type'),

    rideController.createRide
)




module.exports = router;