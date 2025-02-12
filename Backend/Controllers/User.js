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

    res.status(201).json({ token, User,message:'User Registered Successfully' });
}

module.exports.loginUser = async(req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message:'Invalid Email or Password'}); 
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid Email or Password'});
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({token, user, message:'User Logged In Successfully'});

}

module.exports.getUserProfile = async(req,res,next) =>{
    res.status(200).json(req.user);
}