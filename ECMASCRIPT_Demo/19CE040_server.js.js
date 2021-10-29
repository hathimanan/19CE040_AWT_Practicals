const { urlencoded } = require('express');
const helmet=require('helmet');

// const https= require('https');
// const path= require('path');
// const fs= require('fs');

const app=express();
app.use(helmet());

app.use(express.urlencoded({
    extended:true
}))

//Routes
app.get('/',(req,res)=>{

    res.send("<h1> Hello from Express Serever</h1>");
})

app.get('/html',(req,res)=>{

    res.sendFile(__dirname+'/html/index.html');
})

app.post('/submit-form',(req,res)=>{
    
    const username=req.body.username123
    console.log(username)
})


app.get('/home',(req,res)=>{
    //database
    //validation
    //security
    res.send("<h1> Welcome to Home Page</h1>");
})

// const sslServer=https.createServer({
//     key:fs.readFileSync(path.join(__dirname,'certi','key.pem')),
//     cert:fs.readFileSync(path.join(__dirname,'certi','cert.pem'))
// },app)


app.listen(3443,()=> console.log('Server Listening on Port number 3443'));

