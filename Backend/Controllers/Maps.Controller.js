const mapService = require('../Services/Maps.Service');

module.exports.getCoordinates = async (req,res,next)=>{
    const {address} = req.body;

    try{
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json(coordinates);
    } catch(err){
        res.status(500).json({message: 'Internal Server Error'});
    }
}