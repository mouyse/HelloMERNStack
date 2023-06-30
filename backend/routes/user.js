const express =  require('express')

const router = express.Router()

const { signUpUser, loginUser } = require('../controllers/userController')

// Login route
router.post('/login', loginUser)

// Sign up route
router.post('/signup', signUpUser)


module.exports = router