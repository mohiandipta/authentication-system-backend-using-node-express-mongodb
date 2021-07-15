const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config')
const api = process.env.API_URl

// middleware method
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))


const userRouter = require('./routes/user.router') // user routes path define with a userRouter routes

// routes
app.use(`${api}/user`, userRouter)

// database
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

// server
app.listen(port, () => {
    console.log('Api is at ' + api)
    console.log("server is running at localhost:" + port)
})