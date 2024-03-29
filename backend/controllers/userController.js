const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign(
        {
        _id: _id,
        },
        process.env.SECRET,
        {
            expiresIn: '3d'
        }
    )
}

// Login user
const loginUser = async (req, res) => {

    const { email, password }= req.body

    try{
        const user = await User.login(email, password)

        //  Create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }


    res.json({mssg: 'Login user'})
}


// Sign up user

const signUpUser = async (req, res) => {

    const { email, password } = req.body

    try{
        const user = await User.signup(email, password)

        //  Create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }

    // res.json({mssg: 'Sign up user'})
}

module.exports = { signUpUser, loginUser }
