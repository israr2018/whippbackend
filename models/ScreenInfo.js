const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ScreenInfo=new Schema({
screen_name:{ 
type:String,
required: [true, "screen name is required"],
unique:[true,"screen name already exists"],
index:true
},
family_type:{
    type:String
},

screen_controls:[]
    
});
module.exports=mongoose.model('LanguageString',ScreenInfo,'LanguageString');