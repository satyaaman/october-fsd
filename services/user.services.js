const {user}=require('../models/index')
const roleservice=require('../services/role.service');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

const getuserbyEmail=async(data)=>{
    const salt = bcrypt.genSaltSync(10);
    const hashpassword = bcrypt.hashSync(data.password, salt);

    const response= await user.create({
        username:data.username,
        email:data.email,
        password:hashpassword
    })
    
    const customerRole=await roleservice.getRolebyName('customer')
    await response.addRole(customerRole);
    return response;
    
}
const verifyEmail=async(data)=>{
    const response=await user.findOne({
        where:{
            email:data
        }
    })
    return response;
}
const verifypassword=async(password,hashedpassword)=>{
    const response=await bcrypt.compareSync(password,hashedpassword);
    return response;
}

const verifytoken=async(token)=>{
    const response= jwt.verify(token,"mysecreatkeypongu");
    return response;
}
const getuserbyEmailid=async(email)=>{
    const response=await user.findOne({
        where:{
            email:email
        }
    })
    return response;
}
module.exports={
    getuserbyEmail,
    verifyEmail,
    verifypassword,
    verifytoken,
    getuserbyEmailid
}