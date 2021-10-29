const express = require('express');
const api = require('api');
const mysql = require('mysql');
const http =require('http');
const app = express();
express.Router('/signup',()=>
{
    //code
});

var server = http.createServer(function(request,response)  {
    response.writeHead(3560, {
        'Content-Type':'text/plain'
    });
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'restapi'
});


connection.connect((err)=>{
    if(err) throw err;
    console.log("Connected successfully to MySql server")
});
