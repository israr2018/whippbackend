// Refernce Routes Handler

var express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var routes=function(referenceModuleModel){
    const referenceModuleRouter = express.Router();
    
    referenceModuleRouter.route('/').post(function(req,res){
        const refModuleObj=new referenceModuleModel(req.body);
        // res.status(200).send("languages is addes");
        referenceModuleModel.create(refModuleObj,function(err,result){
            if(err){
                console.log("err"+JSON.stringify(err));
                return res.status(501).send("Language  Could not saved"+err);
            }
            else{
                return res.status(201).send({
                    code:201,
                    message:"Language info has been successfully saved",
                    data:result
                })
            }
         });
        
    });
    referenceModuleRouter.route('/').get(function(req,res){
       
        // res.status(200).send("languages is addes");
        referenceModuleModel.find(function(err,data){
            if(err){
                console.log("err"+JSON.stringify(err));
                return res.status(501).send("Language  Could not saved"+err);
            }
            else{
                return res.status(201).send({
                    code:201,
                    message:"Language info has been successfully saved",
                    data:data
                })
            }
         });
        
    });
    return referenceModuleRouter;
}
module.exports=routes;