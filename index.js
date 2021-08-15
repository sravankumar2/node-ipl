const mongoose = require('mongoose');
require('dotenv/config')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const errorController = require('./controllers/error')
const app=express()

const ConnectionString=process.env.DB_CONNECTION
const Options={
    useUnifiedTopology:true,
    useNewUrlParser:true
}
mongoose.connect(ConnectionString,Options).then(
    ()=>{
        console.log('Connection Established')
    }
).catch((error)=> console.log(error))
app.set('view engine', 'ejs')
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoutes);
app.use(userRoutes);

// const server = require('http').createServer(app)
// var io = require("socket.io")(server)


// app.use('/',( req,res,next)=>{
//     res.send("hello user")
//     next()
// }) 
// app.use('/addproduct',( req,res,next)=>{
//     res.send("hello product")
// })
app.use(errorController.get404)
// app.use(( req,res,next)=>{
//     res.status(404).render('404', {pageTitle:"Page Not Found"})
// })
var http=require('http').createServer(app)
var io= require("socket.io")(http)
app.use(express.static(__dirname + './views/user/player.ejs'));
io.on("connection", (socket)=>{
    console.log(" a user connected")
    socket.on("sendMessage", msg=>{
        socket.broadcast.emit("sendToAll", msg)
    })
    socket.on("disconnect", (msg)=>{
        console.log("disconneted")
        // io.emit("sendToAll", msg)
    })
   
})
http.listen(3000,()=>{
    console.log("connection established")
})