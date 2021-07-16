const { User } = require('../models/user.model') // user model path
const express = require('express')
const router = express.Router()



// GET user
router.get('/', async (req, res) => {
    let user = await User.find()
    if (!user) {
        console.log('the user not found')
        res.status(500).json({ success: false })
    }
    res.send(user)
})


// POST user
// router.post('/signin', async (req, res) => {
//     const user = await User.findOne({ email: req.body.email, password: req.body.password })
//     if (!user) {
//         return res.status(500).json({ message: 'User not found, Please create an user or check again' })
//     }
// })

// POST user signup
router.post('/signup', async (req, res) => {
    let user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user = await user.save();
    if (!user) {
        console.log('the user can not be created')
    }
    res.send(user);
})


module.exports = router;