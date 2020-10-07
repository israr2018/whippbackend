// Languages Routes handler

var express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const languagesRepo=require('../repositories/languagesRepo');
const validators=require('../common/joiValidator');
const messages=require('../common/messages');
// const { joi } = require("@hapi/joi");

var routes=function(){
    const router = express.Router();

    router.route('/').post(async function(req,res){
       // return res.status(200).send("languages");
          const {error} = validators.validateLanguagePayload(req.body);
            if(error){
                messages.fail(res,error,'');
            }
            let data= await languagesRepo.create(req.body).catch(e=>{
                messages.fail(res,error,'');
            });
            messages.created(res,data,"success");
    });
 
    router.route('/').get(async function(req,res){
        //res.status(200).send(" languageas");
       let data= await languagesRepo.all().catch(e=>{
            messages.fail(res,e);
        });
        console.log("data"+data);

       messages.success(res,data);
    });
    router.route('/').put(async function(req,res){

       const {error}=  validators.validateLanguagePayload(req.body);

        if (error){
            //  let param={lang_code:req.params.lang_code};
            //  let data= await languagesRepo.update(param).catch(e=>{
            //     messages.success(res,e,"fail");
            //  });
            //  messages.success(res,data,"success");
            messages.fail(res,error);
        }
         let data=await languagesRepo.update(req.body).catch(e=>{
             messages.fail(res,error);

         })
         messages.success(res,data);
    });
    router.route('/:_id').get(async function(req,res){
        if (req.params._id){
             let param={_id:req.params._id};
             let data= await languagesRepo.findById(param).catch(e=>{
                messages.fail(res,e);
             });
             messages.success(res,data);

        }
        messages.fail(res,"Invalid  Parameters");
    });
    router.route('/:_id').delete(async function(req,res){
       
        if (req.params._id){
            let param={_id:req.params._id};
            
            let data= await languagesRepo.remove(param).catch(e=>{
                console.log("error:"+e);
                 messages.fail(res,e);
            });
            console.log("data:"+JSON.stringify(data));
            if(data.deletedCount>0)
             messages.remove(res);
             else{
                 messages.fail(res,"invalid key");
             }

       }
       else{
        messages.fail(res,"Invalid  Parameters");
       }
       
    });
    return router;
}
module.exports=routes;