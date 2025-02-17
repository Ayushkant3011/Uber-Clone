const captainModel = require('../Models/Captain.model');
const captainService = require('../Services/Captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        const isCaptainAlreadyExist = await captainModel.findOne({ email });
        const isVehicleAlreadyExist = await captainModel.findOne({ vehicle });

        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: 'Captain Already Exist' });
        }

        if (isVehicleAlreadyExist) {
            return res.status(400).json({ message: 'Vehicle Already Exist' });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

        const token = captain.generateAuthToken();

        res.status(201).json({ token, captain, message: 'Captain Registered Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}