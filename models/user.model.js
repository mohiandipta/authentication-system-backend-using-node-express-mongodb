const mongoose = require('mongoose')

const userScema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

exports.User = mongoose.model('User', userScema)