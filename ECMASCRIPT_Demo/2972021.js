const fs = require('fs');
const http = require('http');
const url = require('url');
const pathName = require('path');
const myserver = http.createServer((req,res) => {
    console.log(req.url);
    res.end('This is server call');
})

// Server Listening Process
myserver.listen(8000,'127.0.0.1', ()=> {
    console.log('My server is listening..................');
})

if(pathName === '/favicon.ico') {
    console.log('This is default page ');
}