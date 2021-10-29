const express = require('express');
const bodyParse=require('body-parser');
const cookieParser=require('cookie-parser');
const session =require('express-session');

var app = express();


app.set('port',5555);

//app.use(bodyParser.urlencoded({
//    extended:true
//}))



//app.use(express.static(__dirname + '/login_cookie'));


app.use(express.urlencoded({
    extended:true
}))

app.use(cookieParser())

app.use(session({
    key:"user_id",
    secret:"RandomSecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:600000,
    }
}))

var sessionChecker=(req,res,next)=>{
    if(req.session.user && req.cookie.user_id){
        app.post('/',sessionChecker,(req,res)=>{
           // var username = req.body.username;
           // var hd = 'Hello : ' + username;
           // res.send(hd);
            //console.log(hd);
            //Document.getElementsByClassName('form');
            res.redirect("/dashboard")
        })
    }
    else{
        next()
    }
}

app.get('/',sessionChecker,(req,res)=>{
    res.redirect("/login")
})
app.route("/login")
.get(sessionChecker,(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})

app.get('/',sessionChecker,(req,res)=>{
    res.redirect("/dashboard")
})
app.route("/dashboard")
.get(sessionChecker,(req,res)=>{
    res.sendFile(__dirname+"/dashboard")
})
app.listen(app.get('port'),()=>
    console.log(`Login running on port no: ${app.get('port')}`)
)