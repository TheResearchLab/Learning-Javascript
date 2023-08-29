const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

// every request has slash
router.get('/',(req,res,next)=>{
    console.log('In another middleware')
    res.sendFile(path.join(rootDir,'views','shop.html')); // path join works on linux systems and windows
});


module.exports = router;