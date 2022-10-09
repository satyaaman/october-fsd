const userservice=require('../services/user.services');
var jwt=require('jsonwebtoken');

const signinuser=async(req,res)=>{
    const response=await userservice.getuserbyEmail(req.body);
        return res.json({
            message:'succesfully sign in  the user',
            code:200,
            succes:true,
            data:response
        })
    
}
const loginuser=async(req,res)=>{
    const response=await userservice.verifyEmail(req.body.email);
    if(!response){
        return res.json({
            message:'email is wrong or not a user yet',
            code:400,
            succes:true,
            err:'again type the email'
        })
    }
    else{
        const correctpassword=await userservice.verifypassword(req.body.password,response.password);
        if(correctpassword){
            var token=jwt.sign({email:response.email,password:response.password,username:response.username},"mysecreatkeypongu")
            return res.json({
                message:'password is correct you may log in ',
                code:400,
                succes:true,
                data:response,
                token:token
            })
        }
        else{
            return res.json({
                message:'password is wrong ',
                code:400,
                succes:true,
                err:'again type the password'
            })
        }
    }
}
module.exports={
    signinuser,
    loginuser
}