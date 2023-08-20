// spin up a node js driven server on port 3000

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method; 
    if(url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<body><h1>Welcome to My webpage</h1>');
        // best to use single quotes on outside and single quotes on inside?
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
        res.write('</body></html>');
        return res.end();
    }
    if(url==='/users') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul><li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li></ul>');
        res.write('</body></html>');
    }
    if(url==='/create-user' && method==='POST') {
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            return res.end()
        })
    }
})

server.listen(3000);