const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    code:{
        require: true,
        type: String
    },
    title: {
        require: true, 
        type: String
    },
    author: {
        require: true,
        type: String
    },
    stock: {
        require: true,
        type: Number
    },
    borrowed:{
        type: Boolean
    }
})

module.exports = mongoose.model('books', dataSchema)