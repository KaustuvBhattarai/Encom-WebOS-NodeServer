const mongoose = require('mongoose');
const user = require('./models/user');
// Map global promise 
mongoose.Promise = global.Promise;
// Connect to database

const db = mongoose.connect('mongodb://localhost:27017/umanagementcli');

//import model
const User = require('./models/user');

//Add User
const addUser = (user) => {
    User.create(user).then(user =>{
        console.info('New User Added');
        db.close();
    });
}

//Find User
const findUser = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');
    User.find({$or: [{firstname: search},{lastname: search}]})
    .then(user =>{
        console.info(user);
        console.info(`${user.length} matches`);
        db.close();
    });
}

//Export all methods
module.exports = {
        addUser,
        findUser
}