const reference_module=require('./ReferenceModule');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const referenceTypeSchema=new Schema({
    
    //reftype_id
    refmod_id_ref:{type:Schema.Types.ObjectId,ref:reference_module},
    reftype_name:{type:String},
    reftype_icon :{type:String},
    reftype_image:{type:String},
    reftype_order:{type:Number},
    reftype_status :{type:Number},
    reftype_create_at:{type:Date,default:Date.now,required:true},
    reftype_create_by: {type:String},
    reftype_update_at: {type:Date,default:Date.now,required:true},
    reftype_update_by:{type:String}
    // langs_create_at
    // langs_created_by
    // langs_update_at
    // langs_update_by
    //   refmod_name: {type:String},
    //   reftype_order:{type:Number},
    //   langs_status:{type:Number},
      
  });
  module.exports=mongoose.model('base_reference_type',referenceTypeSchema,'base_reference_type');