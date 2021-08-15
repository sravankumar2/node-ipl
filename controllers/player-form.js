const mongoose = require('mongoose');
const Players = require("../models/player");
exports.postAddPlayer = (req, res, next) =>{
    const name =req.body.name;
    const team = req.body.team;
    const price = req.body.price;
    const status = req.body.status.value;
    const description = req.body.description;
    const player = new Players({
        playerName:name,
        from:team,
        price:price,
        isPlaying:status,
        description:description,
       
    });
    console.log(req.body)

    player.save()
        .then(result =>{
            console.log("created player")
            
            res.redirect('/addPlayer')
        })
        .catch(err =>{
            console.log(err)
        })

}

exports.getPlayers = (req, res, next) =>{
    res.render('../views/user/home.ejs', {
        pageTitle:"Home Page",
        pls:[],
        path:'/players'     
        

    })
    
}
exports.postSearchPlayer = (req, res, next) =>{
    
    var name=req.query.title.trim().toUpperCase()
  
  console.log(name)
  Players.find({from:name}, function(err, result){
     if(err){
         console.log(err)
     }
     else{
        res.render('../views/user/home.ejs', {
            pageTitle:`${name} TEAM`,
            pls:result,
            path:'/search'
        })
     }
 })

 
}
exports.getAddPlayer  = (req, res, next) =>{
    res.render('../views/user/player-form.ejs', {
        pageTitle:"Home Page",
        path:'/addPlayer'
        
        

    })
}
exports.getPlayerDetails =(req, res, next)=>{
    const playerId = req.params.playerId;
    console.log(playerId)
    Players.findById(playerId)
    .then(player=>{
        if(!player){
            res.redirect('/')
        }
        res.render('../views/user/player',{
            pageTitle:`${player.playerName} Page`,
            path:"/palyer",
            pls:player
        })
    })
}
