const mapService = require('../Services/Maps.service');
const {validationResult} = require('express-validator');


module.exports.getCoordinates = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    
    const {address} = req.query;

    try{
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch(err){
        res.status(404).json({message: 'Coordinates Not Found'});
    }
}