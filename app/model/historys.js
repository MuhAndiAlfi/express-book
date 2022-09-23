const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    books: [],
    member: [],
    borrow:{
        require: true,
        type: Date
    },
    return:{
        type: Date,
        default: null
    },
    expire: {
        require: true,
        type: Date
    }
})

module.exports = mongoose.model('historys', dataSchema)