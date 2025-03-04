const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

router.post('/create',
    body('userId').isString().isLength({min: 3, max: 24}).withMessage('Invalid User ID'),
    body('pickup').isString().isLength({min: 3}).withMessage('Invalid Pickup Location'),
    body('destination').isString().isLength({min: 3}).withMessage('Invalid Destination Location'),
    
)




module.exports = router;