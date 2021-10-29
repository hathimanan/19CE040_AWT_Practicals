require('dotenv').config();
const process =  require('process');
const http = require('http');
const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var createController=require('create-controller');
var router = express.Router();
var app = express();
//Configuring express server
app.use(bodyparser.json);


// Read the host address and the port from the environment
const hostname = process.env.HOST;
const port = process.env.PORT;

// Return JSON regardless of HTTP method or route our web app is reached by
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`{"message": "Hello World"}`);
});

// Start a TCP server listening for connections on the given port and host
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

DB_HOST=process.env.HOST
DB_PORT=3306  
DB_PASSWORD=""
DB_MAX_CONNECTIONS=15 
CACHE_ADDR=process.env.HOST
CACHE_PORT= 6379 
HOST=process.env.HOST
PORT=3000


// to display form
router.get('/form', createController.crudForm );
// to create data
router.post('/create', createController.createData);
module.exports = router;

var db=require('../database');
module.exports={
  readData:function(callback){
    var createDB=`CREATE DATABASE db`;
    db.query(createDB,function(err,data,fields) {
    if (err) throw err;
    return callback(data);
    });
    var create=`CREATE TABLE crud(name VARCHAR(10),number FLOAT(10,0))`;
    db.query(create,function(err,data,fields) {
    if (err) throw err;
    return callback(data);
    });

    var insert=`INSERT TABLE crud VALUES('MANAN',1)`;
    db.query(insert,function(err,data,fields) {
    if (err) throw err;
    return callback(data);
    });
    var sql='SELECT * FROM crud';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    return callback(data);
    });  
  }
 
}