const User = require('../models/userModel')

// Login user
const loginUser = async (req, res) => {

    res.json({msg: 'Login user'})
}


// Sign up user

// Login user
const signUpUser = async (req, res) => {

    res.json({msg: 'Sign up user'})
}

module.exports = { signUpUser, loginUser }
