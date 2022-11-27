const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    passwordHash:String,
    phone:String,
    isAdmin:Boolean
})

exports.User = mongoose.model('User',userSchema);