const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: { type:String },
    lastname: { type:String },
    phone: { type:String },
    email: { type:String }
});

// Define and export

module.exports = mongoose.model('User', userSchema);