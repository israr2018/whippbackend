//LanguageStrings Routes handler

var express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const languages=require('../models/Languages');
const messages = require("../common/messages");
const languageStringsRepo=require("../repositories/languageStringsRepo");
const languageRepo=require("../repositories/languagesRepo")
var routes=function(languagesStringModel){
    const languageStringsRouter = express.Router();
    languageStringsRouter.route('/').get( async function(req,res){
        const data=await languageStringsRepo.all().catch((e)=>{
            messages.fail(res,e);
        })
        messages.success(res,data);
    });
    languageStringsRouter.route('/').post(async function(req,res){
        const language_string=new languagesStringModel(req.body);
       const data=await languageStringsRepo.create(language_string).catch((e)=>{
            messages.fail(res,e);
        });
        messages.success(res,data);

    });
    languageStringsRouter.route('/').put(async function(req,res){
       
        const data= await languageStringsRepo.update(req.body).catch((e)=>{
            messages.fail(res,e);
        })
        messages.success(res,data);
      
    });

    languageStringsRouter.route('/:_id').delete(async function(req,res){
        if(req.params._id){
        const data= await languageStringsRepo.remove({_id:req.params._id}).catch((e)=>{
            messages.fail(res,e);
        })
        messages.success(res,data);
    }
    else{
        messages.fail(res,"invalid id");
    }
      
    });
    languageStringsRouter.route('/:language_id').get(async function(req,res){
        let id=req.params.language_id;
        const languages=await languageRepo.findById({_id:id}).catch((e1)=>{
            messages.fail(res,e1);
        });
       const data= await languageStringsRepo.all().catch((e2)=>{
        messages.fail(res,e2);
       });
       let d={};
       let langStringData={};
       for(let x of data){
        d[x.langs_key]=x.langs_value[id];
        langStringData[x.langs_screen_name]=d;
       }
       let outPut={};
       outPut.language=languages;
       outPut.languagestring=langStringData;
       
       //res.status(200).send(outPut);
       messages.customSuccess(res,outPut);
    });
   
    return languageStringsRouter;
}
module.exports=routes;