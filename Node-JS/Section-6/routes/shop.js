const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// every request has slash
router.get('/',(req,res,next)=>{
    //console.log('shop.js', adminData.products);
    res.render('shop');
});


module.exports = router;