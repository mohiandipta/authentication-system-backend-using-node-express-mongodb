const express = require('express')
const User = require('../models/user.model')
const router = express.Router()

router.post('/signup', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user = User.save()
    if (!user) {
        console.log('the user can not be created')
    }
    res.send(user);
})


model.exports = router