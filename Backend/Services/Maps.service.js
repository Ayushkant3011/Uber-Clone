const axios = require('axios');

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