const jwt = require("jsonwebtoken");

// to verify if the token is valid
const verifyToken = (req,res,next)=>{
    // fro headers of req we take token
    const authHeader = req.headers.token;
    if(authHeader){
        // in token we exclude the bearer part and only takes value of token
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err,user)=>{
            if(err){
                res.status(403).json("token is invalid!");
            }
            else{
                // make requested user to user retured by jwt.verify function
                req.user = user;
                next();
            }
        });
    }
    else{   
        res.status(401).json("you are not authenticated!");
    }
};

// to check if the user is valid
const verifyTokenAndAuthorization = (req,res,next)=>{
    // firstly of user is having valid token we check if user authorized ie an admin or is the same user 
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
        else{
            return res.status(403).json("you are not Authorized")
        }
    });
}

// to check if the user is admin
const verifyTokenAndAdmin = (req,res,next)=>{
    // same as above but for admin check only
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }
        else{
            return res.status(403).json("you are not Authorized")
        }
    });
}

module.exports = {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization}