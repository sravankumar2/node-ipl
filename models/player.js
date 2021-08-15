const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const playerSchema = new Schema({
     
  playerName:{
      type:String,
      required:true
  },
  from:{   
      type:String,
      required:true
  },
  price:{
      type:Number,
      required:true
      
  },
  isPlaying:{
      type:Boolean,
      required:true,
      default:false
  },
  description:{
    type:String,
    required:true
  }

});
module.exports = mongoose.model('players', playerSchema )