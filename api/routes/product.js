const router = require("express").Router();
const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");


// ADD PRODUCT
router.post("/", verifyTokenAndAdmin, async (req,res)=>{
    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
} )



// UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body,}, {new: true});
        res.status(200).json(updatedProduct);
    }
    catch(err){
       res.status(500).json(err);
    }
});

//DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been Deleted");
    }
    catch(err){
       res.status(500).json(err);
    }
});

//GET PRODUCT (products can be access by anyone therefore we use verifyTokenAndAuthorization middleware)
router.get("/find/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
       res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", verifyTokenAndAuthorization, async (req,res)=>{
    const qCategory = req.query.category;
    try{
        let products;
        if(qCategory){
            // saves a array of product which have category as qCategory
            products = await Product.find({
                category: {
                    $in: [qCategory],
                },
            });
        }else{
            // else all products
            products = await Product.find();
        }
        res.status(200).json(products);
    }
    catch(err){
       res.status(500).json(err);
    }
});

 
module.exports = router;