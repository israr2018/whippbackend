const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const languagesSchema=new Schema({
    
    lang_name:{type:String},
    lang_code:{type:String},
    lang_is_rtl:{type:Boolean},
    lang_status:{type:Boolean},
    lang_create_at:{type:Date,default:Date.now,required:true},
    lang_create_by: {type:String},
    lang_update_at: {type:Date,default:Date.now,required:true},
    lang_update_by:{type:String}
});
module.exports=mongoose.model('base_languages',languagesSchema,'base_languages');