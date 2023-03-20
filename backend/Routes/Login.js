const express = require('express')
const router = express.Router()
const User = require('../models/User')
app.post("/login", (req, res) => {
    const { email, password}= req.body
    User.findOne({ email:email}, (err,user) => {
        if(user){
             if(password===user.password){
                res.send({message: "Login Successfull", user:user})
             }
             else{
                res.send({message: "Password didn't match"})
             }
        }
        else{
            res.send({message: "User Not Found"})
        }
    })
})

module.exports = router;