const express = require('express');
const router = express.Router();
var abc = express();

abc.set('port',7000);
/* GET home page. */
router.get('/', function(req, res){
res.render('index.js',localhost);
});
 
router.post('/', function(req, res){
//Grab the request body
const body = req.body;

var res_body = {
username: body.username,
password: body.password,
};
 
res.render('welcome', res_body);
});
 
module.exports = router;