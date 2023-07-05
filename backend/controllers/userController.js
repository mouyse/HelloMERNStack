const User = require('../models/userModel')

// Login user
const loginUser = async (req, res) => {

    res.json({mssg: 'Login user'})
}


// Sign up user

// Login user
const signUpUser = async (req, res) => {

    const { email, password } = req.body

    try{
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
    } catch (error){
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'Sign up user'})
}

module.exports = { signUpUser, loginUser }
