const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const loginSchema = new Schema({
     
  userName:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  }

});
module.exports = mongoose.model('admins',loginSchema )