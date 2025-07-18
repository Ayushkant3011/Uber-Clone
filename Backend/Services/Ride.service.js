const rideModel = require('../Models/Ride.model');
const { sendMessageToSocketId } = require('../socket');
const mapService = require('./Maps.service');

const crypto = require('crypto');


async function getFare(pickup, destination){
    // calculate fare based on distance
    if(!pickup || !destination){
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 20,
        car: 50,
        moto: 15
    };

    const perKmRate = {
        auto: 10,
        car: 20,
        moto: 8
    };

    const perMinuteRate ={
        auto: 2,
        car: 3,
        moto: 1.5
    }

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;
}

module.exports.getFare = getFare;

function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10, num -1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) =>{
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('All Fields are required');
    }

    const fare = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(4),
        fare: fare[ vehicleType ],
    });

    return ride;
}



module.exports.confirmRide = async ({
    rideId
}) => {
    if(!rideId){
        throw new Error('Ride ID is required');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status:'accepted',
        captain: captain._id
    })

    const ride = await rideModel.findOne({
        _id:rideId
    }).populate('user').populate('captain').select('+otp');

    if(!ride){
        throw new Error('Ride not Found');
    }
    
    return ride;
}


module.exports.startRide = async ({rideId, otp, captain})=>{
    if(!rideId || !otp || !captain){
        throw new Error('All Fields are required');
    }

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('+otp');
    
    if(!ride){
        throw new Error('Ride not Found');
    }

    if(ride.status !== 'accepted'){
        throw new Error('Ride is not accepted yet');
    }
    if(ride.otp !== otp){
        throw new Error('Invalid OTP');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status: 'ongoing',
    })


    sendMessageToSocketId(ride.user.socketId, {
        event:'ride-started',
        data: ride
    })

    return ride;
}


module.exports.endRide = async ({rideId, captain})=>{
    if(!rideId){
        throw new Error('Ride ID is required');
    }

    const ride = await rideModel.findOne({
        _id: rideId,
        captain: captain._id
    }).populate('user').populate('captain').select('+otp');

    if(!ride){
        throw new Error('Ride not Found');
    }

    if(ride.status !== 'ongoing'){
        throw new Error('Ride is not ongoing yet');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    },{
        status: 'completed',
    })
}