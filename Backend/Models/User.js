const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, "First Name should be atleast 3 characters long"],
        },
        lastname:{
            type:String,
            minlength:[3, 'Last Name should be atleast 3 characters long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[6, 'Email should be atleast 6 characters long'],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    
    socketId:{
        type:String,
    },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(Password, this.password);
}

userSchema.methods.hashPassword = async function(){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;