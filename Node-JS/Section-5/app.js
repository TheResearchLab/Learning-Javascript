// ============= Section 4 ============//
// importing modules
const express = require('express');
const bodyParser = require('body-parser');

// my own module
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');




const app = express();

// app.use((req,res,next)=>{
//     console.log('In the middleware')
//     next(); // next travels to the next middleware line
// });// use allows us to use a new middleware function

app.use(bodyParser.urlencoded({extended: false})); // this does body parsing sent through a form 

app.use('/admin',adminRoutes);

app.use(shopRoutes);


// catch all route
app.use('/',(req,res,next) => {
    res.status(404).send('<h1>Page not found :( </h1>');
})

// const server = http.createServer(app);
// server.listen(3000); 

app.listen(3000) // this does the server creation and can remove the http requirement

