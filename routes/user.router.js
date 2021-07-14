const express = require('express')
const { User } = require('../models/user.model')
const router = express.Router()

// signin
router.get('/', async (req, res) => {
    let userList = await User.find()
    user = User.save()
    if (!userList) {
        console.log('the user not found')
    }
    res.send(user);
})



// signup
router.post('/', async (req, res) => {
    let user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user = await User.save()
    if (!user) {
        console.log('the user can not be created')
    }
    res.send(user);
})


module.exports = router;