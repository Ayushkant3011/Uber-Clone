const rideModel = require('../Models/Ride.model');
const mapService = require('./Maps.service');


async function getFare(pickup, destination){
    // calculate fare based on distance
    if(!pickup || !destination){
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 20,
        car: 50,
        motorcycle: 15
    };

    const perKmRate = {
        auto: 10,
        car: 20,
        motorcycle: 8
    };

    const perMinuteRate ={
        auto: 2,
        car: 3,
        motorcycle: 1.5
    }

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;
}


module.exports.createRide = async ({}) =>{}

