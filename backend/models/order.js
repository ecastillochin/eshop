const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    status:String,
    phone:String,
})

exports.Order = mongoose.model('Order',orderSchema);