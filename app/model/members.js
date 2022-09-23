const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    code:{
        require: true,
        type: String
    },
    name: {
        require: true, 
        type: String
    },
    penalty: {
        require: true,
        type: String
    }
})

module.exports = mongoose.model('members', dataSchema)