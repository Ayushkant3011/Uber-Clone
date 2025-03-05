const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideController = require('../Controllers/Ride.controller');
const authMiddleware = require('../Middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({min: 3}).withMessage('Invalid Pickup Location'),
    body('destination').isString().isLength({min: 3}).withMessage('Invalid Destination Location'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid Vehicle Type'),

    rideController.createRide
)




module.exports = router;