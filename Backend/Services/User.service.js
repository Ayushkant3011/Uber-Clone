const userModel = require('../Models/User');



module.exports.createUser = async ({
    firstname,lastname,email,password
}) =>{
    if(!firstname || !email || !password){
        throw new Error('All Fields are required');
    }
    const User = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    });

    return User;
}