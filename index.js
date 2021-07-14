const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv/config')

// const router = require('./routes/user')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        dbName: 'authentication(flutter)'
    })
    .then(() => {
        console.log('database connection is ready')
    })
    .catch((err) => {
        console.log('database can not be connected')
    })





app.listen(port, () => {
    console.log("server is running at localhost:" + port)
})