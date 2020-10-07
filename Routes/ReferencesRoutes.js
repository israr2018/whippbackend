var express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var routes=function(referencesModel){
    const referencesRouter = express.Router();
    
    referencesRouter.route('/').post(function(req,res){
        const referencesObj=new referencesModel(req.body);
        //res.status(200).send("refeencet route");
        referencesModel.create(referencesObj,function(err,result){
            if(err){
                console.log("err"+JSON.stringify(err));
                return res.status(501).send("reference type could not save"+err);
            }
            else{
                return res.status(201).send({
                    code:201,
                    message:"references info  has been successfully saved",
                    data:result
                })
            }
         });
        
    });
    referencesRouter.route('/').get(function(req,res){
       
        // res.status(200).send("languages is addes");
        referencesModel.find(function(err,data){
            if(err){
                console.log("err"+JSON.stringify(err));
                return res.status(501).send("References  Could not find"+err);
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
    return referencesRouter;
}
module.exports=routes;