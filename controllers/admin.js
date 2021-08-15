const mongoose = require('mongoose');
const admins = require("../models/admin");
const Players= require("../models/player")
exports.getLoginForm = (req, res, next) =>{
    res.render('../views/admin/login.ejs', {
        pageTitle:"Login Page",      
        path:'/admin/login'
    
    })
    
}
exports.getAuth = (req, res, next) =>{
    console.log(req.query)
    var name=req.query.name.trim().toLowerCase()
    var password=req.query.password.trim().toLowerCase()
    admins.find(function(err, result){
        if(err){
            console.log(err)
        }
        else{
            var dbData=JSON.parse(JSON.stringify(result[0]))
            console.log(dbData)
            console.log(dbData.user_name)
            console.log(dbData.password)
            if(name==dbData.user_name && password==dbData.password){
                console.log("login Success") 
                
                res.redirect('/admin/home')
                 
             }
             else{
                 console.log("Incorrect user name and password")
                 console.log("incorrect user")
                 res.redirect("/admin/login")
             }
        }
    })
 
          
    }
    exports.getAllPlayers = (req, res, next) =>{
        Players.find(function(err, result){
            if(err){
                console.log(err)
            }
            else{
               res.render('../views/admin/home.ejs', {
                   pageTitle:`Admin Home`,
                   pls:result,
                   path:'/admin/home'
               })
            }
        })
       
   }
    
   
