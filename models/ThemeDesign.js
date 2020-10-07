const reference_module=require('./ReferenceModule');
const reference_type=require('./ReferenceType')
const { Schema } = require("mongoose")
const theme=require('./Themes');
const themeDesignSchema=new Schema({
    theme_id_ref:{type:Schema.Types.ObjectId,ref:theme},
    themed_name :{type:String},
    themed_device_type:{type:String},
    themed_key_field: {type:String},
    
    theme_create_at:{type:Date,default:Date.now,required:true},
    theme_create_by: {type:String},
    theme_update_at: {type:Date,default:Date.now,required:true},
    theme_update_by:{type:String},
    themed_key_value:{type:String},
    themed_color_Code:{type:String},
    themed_desc:{type:String},
    themed_order:{type:Number},
    themed_status:{type:Number},

    themed_create_at:{type:Date,default:Date.now,required:true},
    themed_create_by: {type:String},
    themed_update_at: {type:Date,default:Date.now,required:true},
    themed_update_by:{type:String}

    //themed_id
    // theme_id_ref
    // themed_name (English, Arabic Data etc)
    // themed_device_type (iOS, Android)
    // themed_key_field (Main Color, Body Color, Button Color)
    // themed_key_value (Red, Blue) 
    // themed_color_Code (#365436)
    // themed_desc (This color used for etc)
    // themed_order
    // themed_status (0/1)
    // themed_create_at
    // themed_created_by
    // themed_update_at
    // themed_update_by

  });
  module.exports=mongoose.model('base_theme_design',themeDesignSchema,'base_theme_design');