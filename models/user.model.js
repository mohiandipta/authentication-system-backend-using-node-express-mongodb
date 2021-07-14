const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema = new Schema({
    email: String,
    password: String
})

model.exports = mongoose.model('User', newSchema)