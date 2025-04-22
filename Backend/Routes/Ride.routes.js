const express = require('express');
const router = express.Router();
const {body, query} = require('express-validator');
const rideController = require('../Controllers/Ride.controller');
const authMiddleware = require('../Middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min: 3}).withMessage('Invalid Pickup Location'),
    body('destination').isString().isLength({min: 3}).withMessage('Invalid Destination Location'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid Vehicle Type'),

    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({min: 3}).withMessage('Invalid Pickup Location'),
    query('destination').isString().isLength({min: 3}).withMessage('Invalid Destination Location'),

    rideController.getFare
)

router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isString().isLength({min: 3}).withMessage('Invalid Ride ID'),
    
    rideController.confirmRide
)


module.exports = router;