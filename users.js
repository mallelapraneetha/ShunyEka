const mongoose = require('mongoose');

let Users = mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
})

module.exports = mongoose.model('Users',Users)