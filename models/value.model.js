var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var ValueSchema=new Schema({
    expire_at: {type: Date, default: Date.now, expires: 300} 
},{ strict: false });

module.exports=mongoose.model('Value',ValueSchema);