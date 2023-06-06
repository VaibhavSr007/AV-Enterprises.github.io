const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt= require("jsonwebtoken");

router.post("/register", async(req,res) =>{
    newUser = new User({
        username: req.body.username,
        password:  CryptoJS.AES.encrypt(req.body.password, process.env.SECERET_KEY).toString(), // argon2 or bycrypt --> string 
        email: req.body.email,
    }); 

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.post("/login", async(req,res) =>{

    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("User doesn't exist");

        // const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.SECERET_KEY); // 
        // const originalpassword = hashedPass.toString(CryptoJS.enc.Utf8); // 
        // console.log(user.password)
       if(user.password != req.body.password)
            return res.status(401).json("Wrong Password");

        const {password , ...others} = user._doc; // this will help to hide pass and show only all other feilds

        // creating acces token by jwt to be sent in response
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
            {expiresIn: "5d"}
        ); 
        res.status(200).json({...others, accessToken});
    }
    catch(err){ 
        res.status(500).json(err);
    }
});

module.exports = router;