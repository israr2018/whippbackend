const reference_module=require('./ReferenceModule');
const reference_type=require('./ReferenceType')
const { Schema } = require("mongoose")
const theme=require('./Themes');
const appDefaultImagesSchema=new Schema({
   // adi_langs_screen_name_ref:{type:Schema.Types.ObjectId,ref:}
    adi_key:{type:String},
    adi_image_url:{type:String},
    adi_file_path:{type:String},
    adi_file_name:{type:String},
    
    adi_file_mime_type:{type:String,enum: ['PDF', 'PNG',JPG]},
    adi_device_type:{type:String,enum: ['IOS', 'Android']},
    adi_order:{type:Number},
    adi_status:{type:Number},

    adi_create_at:{type:Date,default:Date.now,required:true},
    adi_create_by: {type:String},
    adi_update_at: {type:Date,default:Date.now,required:true},
    adi_update_by:{type:String},  adi_device_type (iOS, Android)
//     adi_id
// adi_langs_screen_name_ref
// adi_key (Image Size like 35x35)
// adi_image_url
// adi_file_path (Directory Path\imagename)
// adi_file_name (Unique File name)
// adi_file_mime_type (PDF, PNG, JPG)
// adi_device_type (iOS, Android)
// adi_order
// adi_status (0/1)
// adi_create_at
// adi_created_by
// adi_update_at
// adi_update_by
  });
  module.exports=mongoose.model('base_app_default_images',appDefaultImagesSchema,'base_app_default_images');