// ============= Section 4 ============//
// importing modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// my own module
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const rootDir = require('./util/path')


const app = express();

// compile dynamic templates with the pug engine
app.set('view engine', 'pug');
app.set('views','views')

app.use(bodyParser.urlencoded({extended: false})); // this does body parsing sent through a form 
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminData.routes);

app.use(shopRoutes);


// catch all route
app.use('/',(req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})



app.listen(3000) // this does the server creation and can remove the http requirement


