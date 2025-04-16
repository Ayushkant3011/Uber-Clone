const axios = require('axios');
const captainModel = require('../Models/Captain.model');


module.exports.getAddressCoordinates = async (address) =>{
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try{
        const res = await axios.get(url);
        if(res.data.status === 'OK'){
            const location = res.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else{
            throw new Error('Unable to find location coordinates');
        }
    }catch(err){
        console.error(err);
        throw err;
    }
}

module.exports.getDistanceTime = async (origin, destination) =>{
    if(!origin || !destination){
        throw new Error('Origin and Destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);

        if(response.data.status === 'OK'){
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error("No Routes Found");
            }

            return response.data.rows[0].elements[0];
        }else{
            throw new Error('Unable to find distance and time');
        }

    } catch(err){
        console.error(err);
        throw err;
    }
}

module.exports.getAutocompleteSuggestions = async (input) =>{
    if(!input){
        throw new Error('Query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            return response.data.predictions;
        } else{
            throw new Error('Unable to find suggestions');  
        }

    } catch(err){
        console.error(err);
        throw err;
    }
}

module.exports.getCaptainsInRadius = async (lat, lng, radius) =>{

    const captains = await captainModel.find({
        location:{
            $geowithin:{
                $centerSphere: [[lng, lat], radius / 3963.2] // radius in miles
            }
        }
    });

    return captains;
}