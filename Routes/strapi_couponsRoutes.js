// Languages Routes handler

var express = require("express");

const stripeCouponsRepo=require('../repositories/stripeCouponsRepo');
const validators=require('../common/joiValidator');
const messages=require('../common/messages');

var routes=function(){
    const router = express.Router();

    router.route('/').post(async function(req,res){
       // return res.status(200).send("languages");
        //   const {error} = validators.validateLanguagePayload(req.body);
        //     if(error){
        //         messages.fail(res,error,'');
        //     }
        console.log("body:"+JSON.stringify(req.body));
            let data= await stripeCouponsRepo.create(req.body).catch(e=>{
                messages.fail(res,error,'');
            });
           
            console.log("data:"+JSON.stringify(data));
            messages.created(res,data,"success");
    });
 
    router.route('/').get(async function(req,res){
        //res.status(200).send(" languageas");
       let data= await stripeCouponsRepo.all().catch(e=>{
            messages.fail(res,e);
        });
       
       messages.success(res,data);
    });
    router.route('/').put(async function(req,res){

    //    const {error}=  validators.validateLanguagePayload(req.body);

    //     if (error){
    //         //  let param={lang_code:req.params.lang_code};
    //         //  let data= await languagesRepo.update(param).catch(e=>{
    //         //     messages.success(res,e,"fail");
    //         //  });
    //         //  messages.success(res,data,"success");
    //         messages.fail(res,error);
    //     }
        
        let payload={};
        let coupon_id=req.body.id;
        let params={};
        params.name=req.body.name;
        params.percent_off=req.body.percent_off;
        payload["metadata"]=params;
         console.log("id=="+coupon_id);
        console.log("payload=="+JSON.stringify(payload));
         let data=await stripeCouponsRepo.update(coupon_id,payload).catch(e=>{
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
       console.log("id:"+req.params._id);
        if (req.params._id){
            
            let data= await stripeCouponsRepo.remove(req.params._id).catch(e=>{
                console.log("error:"+e);
                 messages.fail(res,e);
            });
           // console.log("data:"+JSON.stringify(data));
            if(data.deleted)
            {
             messages.remove(res);
             console.log("deleted successuflly");
            }
             else{
                 console.log("else  part");
                 messages.fail(res,"coulde not deleted ");
             }
             
       }
       else{
        messages.fail(res,"Invalid  Parameters");
       }
       
    });
    return router;
}
module.exports=routes;