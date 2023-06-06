const router = require("express").Router();
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// ***************** TESTING PURPOSE **********************
router.get("/usertest",(req,res) => {
    res.send("sucessully connection")
})

// router.post("/userposttest", (req,res) =>{
//     const username = req.body.username;
//     const password = req.body.password;
//     console.log(username, password);
//     res.send("Hello:" +   username)
// })
// ***************************************************

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body,}, {new: true});
        res.status(200).json(updatedUser);
    }
    catch(err){
       res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been Deleted");
    }
    catch(err){
       res.status(500).json(err);
    }
});

//GET USER (only admin can acess any user therefore we use verifyTokenAndAdmin middleware)
router.get("/find/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password , ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(err){
       res.status(500).json(err);
    }
});

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
       res.status(500).json(err);
    }
});

 
module.exports = router;