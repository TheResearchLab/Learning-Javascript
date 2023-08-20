const fs = require('fs');

const requestHandler = (req,res) => {

    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title> The is the response </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        return res.end(); // call end to tell program we are done
        // res.write() // this will cause an error
    }
    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk)=> {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=> {
                // this response should only be sent if done with file
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
    };
    res.setHeader('Content-Type','text/html')
    res.write('<html>');
    res.write('<head><title> The is the response </title></head>');
    res.write('<body><h1>Hello from Node-JS</h1></body>')
    res.end();
    //console.log(req.url,req.method,req.headers);
    // process.exit(); // hard exits the event loop after we listened to request
}


// module.exports = requestHandler;

module.exports = {
    handler:requestHandler,
    someText:'some hard code text'};


// Another way to export in Node
// module.exports.handler = requestHandler;
// module.exports.someText = 'some text';

//short-cut supported by node js
// exports.handler = requestHandler;
// exports.someText = 'some text';