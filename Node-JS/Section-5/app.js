// ============= Section 4 ============//
// importing modules
const express = require('express');

const app = express();

// app.use((req,res,next)=>{
//     console.log('In the middleware')
//     next(); // next travels to the next middleware line
// });// use allows us to use a new middleware function


app.use('/',(req,res,next)=>{
    console.log('This always runs')
    next();
});


app.use('/add-product',(req,res,next)=>{
    console.log('In another middleware')
    res.send('<h1>Hello from Express</h1>');
});

// every request has slash
app.use('/',(req,res,next)=>{
    console.log('In another middleware')
    res.send('<h1>Hello from Express</h1>');
});


// const server = http.createServer(app);
// server.listen(3000); 

app.listen(3000) // this does the server creation and can remove the http requirement


