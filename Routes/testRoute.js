//  routes for testing  issues

var express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validatePayload=require('../common/joiValidator');
const users=require('../repositories/Users');
var routes=function(userModel){
    const referencesRouter = express.Router();
    
    referencesRouter.route('/').post(async(req,res)=>{
        const payload=req.body;
        const result2= validatePayload.validateUserPayload(payload);
        console.log("result2"+JSON.stringify(result2));
        const {error}=result2;
        if(error){
            return res.status(403).send({
                status:"Failed",
                message:"Invalid Payload",
                data:error
            })
        }
        const user=new userModel(req.body);
        
        try{
           const newUser= await userModel.create(user);
           res.status(200).send(newUser);
        }
        catch(e){
            const errData={
                message:"Faied",
                error:e
            };
            res.status(200).send(errData);
        }
        
    }
        
    );
    referencesRouter.route('/').get(async(req,res)=>{
       
       // return res.status(200).send("test-get route");
        // try{
        //     const usersData=await users.allUsers();
            
        //     res.status(200).send({
        //         message:"success",
        //         data:usersData
        //     });
        // }
        // catch(e){
        //     res.status(200).send({
        //         message:"failed",
        //         data:e
        //     });
        // }
        
            const usersData=await users.allUsers().catch((e)=>{
                res.status(200).send({
                    message:"failed",
                    data:e
                });
            });
            
            res.status(200).send({
                message:"success",
                data:usersData
            });
        
    }
    );
    return referencesRouter;
}
module.exports=routes;