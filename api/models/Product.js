const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, unique:true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: Array},
    price: {type: Number, required: true},
},
{timestamps: true} // this helps know when user created 
);
 
module.exports = mongoose.model("Product",ProductSchema);