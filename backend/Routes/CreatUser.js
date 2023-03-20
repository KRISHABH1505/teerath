const express = require('express')
const router = express.Router()
const User = require('../models/User')
// const { body, validationResult } = require('express-validator');


// router.post('/creatuser', (req, res) => {
//     User.create({
//         name : req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }).then(user => res.json(user));
//   });
  router.post("/creatuser", (req, res) => {
    const {name, email, password}= req.body
    User.findOne({email: email}, (err, user)=>{
        if(user){
            res.send({message: "User Already Registered"})
        }
        else{
            const user= new User({
                name,
                email,
                password
            })
            //error checking
            user.save(err => {
                if(err){
                    res.send(err)
                }
                else{
                    res.send({ message: "Successfully Registerd, Please login now.!" })
                }
            })
        }
    })
    
})
// router.post("/creatuser", 
// [body('email', 'email is not good').isEmail(),
// body('name', 'name is not good').isLength({ min: 1 }),
// body('password', 'Password not strong enough').isLength({ min: 1 })],
// async(req, res)=>{
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     try {
//         await User.create({
//             name : req.body.name,
//             email: req.body.email,
//             password: req.body.password,
//             location: req.body.location
//         })

//         res.json({success:true});
//     } catch (error) {
//         console.log(error)
//         res.json({success:false});
//     }
// })

module.exports = router;