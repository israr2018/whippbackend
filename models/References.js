const reference_module=require('./ReferenceModule');
const reference_type=require('./ReferenceType')
const  mongoose  = require("mongoose")
const Schema=mongoose.Schema;

const referencesSchema=new Schema({
    
    refmod_id_ref:{type:Schema.Types.ObjectId,ref:reference_module},
    reftype_id_ref:{type:Schema.Types.ObjectId,ref:reference_type},
    ref_name :{type:String},
    ref_icon:{type:String},
    ref_image:{type:String},
    ref_order:{type:Number},
    ref_status:{type:Number},
    ref_create_at:{type:Date,default:Date.now,required:true},
    ref_create_by: {type:String},
    ref_update_at: {type:Date,default:Date.now,required:true},
    ref_update_by:{type:String}
        //     ref_id
        // refmod_id_ref
        // reftype_id_ref
        // ref_name (English, Arabic Data etc)
        // ref_icon 
        // ref_image
        // ref_order
        // ref_status (0/1)
        // ref_create_at
        // ref_created_by
        // ref_update_at
        // ref_update_by

  });
  module.exports=mongoose.model('base_references',referencesSchema,'base_references');