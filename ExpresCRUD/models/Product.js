const mongoose = require('mongoose');
 

// Table Structure 

const ProductSchema = mongoose.Schema({
    pname:String , 
    pprice:Number ,
    pdetails:String
})

// Convert schema into model 

const ProductModel = mongoose.model('product' , ProductSchema) ;


module.exports = ProductModel