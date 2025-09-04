var express = require('express');
var router = express.Router();

var ProductModel = require("../models/Product")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/add-product', function(req, res, next) {
  res.render('add-product');
});

router.post('/add-product-process', function(req, res, next) {
  var Productdata = {
    pname :req.body.txt1 ,
    pprice : req.body.txt2, 
    pdetails : req.body.txt3 
  }
  var mydata = ProductModel(Productdata)
  mydata.save()
  .then(()=>{
    res.send("Record Added")
  })
  .catch(err => console.log(err))
});

router.get('/display-product', function(req, res, next) {
  ProductModel.find()
  .then(data => {
    console.log(data) 
    res.render('display-product' , {mydata : data})
  })
  .catch(e=> console.log(e))
});

router.get('/display-product-api', function(req, res, next) {
  ProductModel.find()
  .then(data => {
    console.log(data) 
    res.json(data)
  })
  .catch(e=> console.log(e))
});


module.exports = router;
