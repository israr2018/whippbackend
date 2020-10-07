const model=require('../models/LanguageStrings');

const all=async()=>{

 const laguagesData=await model.find().catch(e=>{
    return e;
 });
 
 return laguagesData;
};
const create=async(payload)=>{
    const laguagesData=await model.create(payload).catch(e=>{
        return e;
     });
     return laguagesData;
};

const update=async(payload)=>{
    
    let doc=await model.findOne({_id:payload._id}).catch(e=>{
        return e;
    });
     doc.langs_status=payload.langs_status;
     doc.langs_screen_name=payload.langs_screen_name;
     doc.langs_key=payload.langs_key;
     doc.langs_value=payload.langs_value;
     doc.langs_order=payload.langs_order;
    let updatedDoc=await doc.save().catch(e2=>{
        return2
    });
    return updatedDoc;
};

const remove=async(params)=>{

    let docId=await model.deleteOne(params).catch(e=>{
        return e;
    });
    return docId;
};
const findById=async (params)=>{
   let data=  await model.findOne(params).catch(e=>{
        return e;
     })
     return data;
};

module.exports={all,create,update,remove,findById};