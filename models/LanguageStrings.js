const languages=require('./Languages')

const mongoose=require('mongoose');
const { defaultEventBridgePolicies } = require('twilio/lib/jwt/taskrouter/util');
const Schema=mongoose.Schema;
// const controlSchema=new Schema({
//     control_name:{type:String},

// });
// const screenInfoSchema=new Schema({
//     screen_name:{type:String},
//     controls:[{controlSchema}]
// });
const languageStringsSchema=new Schema({
   // langs_id:{type:Schema.Types.ObjectId,ref:languages},
   // langs_family_id_ref:{type:Schema.Types.ObjectId,ref:languages},
    langs_screen_name:{type:String},
    langs_key:{type:String},
   // langs_value_type_ref   (Screen, Error, Sucess etc)
    langs_value:{type:Schema.Types.Mixed}, // Json object
    langs_order:{type:Number},
    langs_status:{type:Boolean,default:true},
    langs_create_at:{type:Date,default:Date.now,required:true},
    langs_created_by:{type:String},
    langs_update_at:{type:Date,default:Date.now,required:true},
    langs_update_by:{type:String}
},

);
// module.exports=mongoose.model('controls',controlSchema,'controls');
// module.exports=mongoose.model('screen_infos',screenInfoSchema,'screen_infos');
module.exports=mongoose.model('base_languages_strings',languageStringsSchema,'base_languages_strings');