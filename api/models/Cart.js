const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    UserCartId: {type: String, required: true},
    products: [
        {
            productId: {type: String, },
            quantity: { type: Number, default: 1, },
        },
    ],
}, 
{timestamps: true} // this helps know when user created 
);

module.exports = mongoose.model("Cart",CartSchema);