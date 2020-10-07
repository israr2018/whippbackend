const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const referenceModuleSchema=new Schema({
    
  //  refmod_name: (English, Arabic Data etc)
    refmod_name: {type:String},
    reftype_order:{type:Number},
    langs_status:{type:Number},
    create_at:{type:Date,default:Date.now,required:true},
    create_by: {type:String},
    update_at: {type:Date,default:Date.now,required:true},
    update_by:{type:String}
});
module.exports=mongoose.model('base_reference_module',referenceModuleSchema,'base_reference_module');