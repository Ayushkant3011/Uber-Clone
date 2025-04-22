const rideService = require('../Services/Ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../Services/Maps.service');
const {sendMessageToSocketId} = require('../socket');
const RideModel = require('../Models/Ride.model');


module.exports.createRide = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors){
        return res.status(400).json({errors: errors.array()});
    }
    
    const {userId, pickup, destination, vehicleType} = req.body;

    try{
        const ride = await rideService.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType
        });
        res.status(201).json(ride);

        const pickupCoordinates = await mapService.getAddressCoordinates(pickup);
        console.log(pickupCoordinates);

        const captainsInRadius = await mapService.getCaptainsInRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2); // 5 km radius
        
        ride.otp = "";

        const rideWithUser = await RideModel.findOne({_id: ride._id}).populate('user', 'name');

        captainsInRadius.map(captain =>{

            console.log(captain, data);

            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data:rideWithUser,
                pickupCoordinates,
                destination
            });
        });


        console.log(captainsInRadius)
    } catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {pickup, destination} = req.query;

    try{
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    }catch(err){
        return res.status(500).json({message: err.message});
    }
}


module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {rideId} = req.body;

    try{
        const ride = await rideService.confirmRide(rideId, req.captain._id);
        
        sendMessageToSocketId(ride.user.socketId,{
            event:'ride-confimred',
            data: ride
        })
        
        
        res.status(200).json(ride);

    } catch(err){
        return res.status(500).json({message: err.message});
    }
}