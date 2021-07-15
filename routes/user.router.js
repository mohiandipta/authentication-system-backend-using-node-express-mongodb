const { User } = require('../models/user.model') // user model path
const express = require('express')
const router = express.Router()



// GET user
router.get(`/`, async (req, res) => {
    let user = await User.find()
    if (!user) {
        console.log('the user not found')
        res.status(500).json({ success: false })
    }
    res.send(user)
})



// POST user
router.post(`/signup`, (req, res) => {
    const user = User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            res.json(user)
        }
    })
    user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save()
        .then((createdUser => {
            res.status(200).json(createdUser)
        }))
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        })
})

// POST user signin
router.post(`/signin`, (req, res) => {
    let user = User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            res.json(user)
        }
    })
    user.save()
        .then((createdUser => {
            res.status(200).json(createdUser)
        }))
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            })
        })
})


module.exports = router;