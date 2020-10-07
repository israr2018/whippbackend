const reference_module=require('./ReferenceModule');
const reference_type=require('./ReferenceType')
const { Schema } = require("mongoose")

const themeSchema=new Schema({
    
    theme_name :{type:String},
    theme_order:{type:Number},
    theme_status:{type:Number},
    theme_create_at:{type:Date,default:Date.now,required:true},
    theme_create_by: {type:String},
    theme_update_at: {type:Date,default:Date.now,required:true},
    theme_update_by:{type:String}
    // theme_id
    // theme_name (English, Arabic Data etc)
    // theme_order
    // theme_status (0/1)
    // theme_create_at
    // theme_created_by
    // theme_update_at
    // theme_update_by

  });
  module.exports=mongoose.model('base_theme',themeSchema,'base_theme');