var express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var routes=function(referenceTypeModel){
    const referenceTypeRouter = express.Router();
    
    referenceTypeRouter.route('/').post(function(req,res){
        const refTypeeObj=new referenceTypeModel(req.body);
        // res.status(200).send("languages is addes");
        referenceTypeModel.create(refTypeeObj,function(err,result){
            if(err){
                console.log("err"+JSON.stringify(err));
                return res.status(501).send("reference type could not save"+err);
            }
            else{
                return res.status(201).send({
                    code:201,
                    message:"reference type has been successfully saved",
                    data:result
                })
            }
         });
        
    });
    referenceTypeRouter.route('/').get(function(req,res){
       
        // res.status(200).send("languages is addes");
        referenceTypeModel.find(function(err,data){
            if(err){
                console.log("err"+JSON.stringify(err));
                return res.status(501).send("Reference Type Could not find"+err);
            }
            else{
                return res.status(201).send({
                    code:201,
                    message:"Sucesss",
                    data:data
                })
            }
         });
        
    });
    return referenceTypeRouter;
}
module.exports=routes;