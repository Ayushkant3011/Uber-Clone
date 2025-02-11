const userModel = require('../Models/User');
const userService = require('../Services/User.service');
const {validationResult} = require('express-validator');



module.exports.registerUser = async(req,res,next) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    console.log(req.body);

    const {fullname, email,password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    const User = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    });

    const token = User.generateAuthToken();

    res.status(201).json({ token, User });
}