const User = require('../models/userModels')
const jwt = require('jsonwebtoken')

//Function will create a JwebToken
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {    
        const user = await User.login(email, password)
        //create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    
    } catch (error) {

        res.status(400).json({error: error.message})
    }
}

//for Sign up if we ever need it
const signupUser = async (req, res) => {
    const {email, password} = req.body
    try {    
        const user = await User.signup(email, password)
        //create a token
        const token = createToken(user._id)
        
        res.status(200).json({email, token})
    
    } catch (error) {

        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }