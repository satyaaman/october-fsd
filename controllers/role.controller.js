const roleservice=require('../services/role.service');

const addingRoleToUser=async(req,res)=>{
    const response=await roleservice.addingRoleToUser(req.body.userId, req.body.roleId);
    if(!response){
        return res.json({
            message:'role is not added',
            code:400
        })
    }
    else{
        return res.json({
            message:'role is  added succesfully',
            code:400,
            success:true
        })
    }
}

const removeRoleToUser=async(req,res)=>{
    const response=await roleservice.removeRoleToUser(req.body.userId, req.body.roleId);
    if(!response){
        return res.json({
            message:'role is not removed',
            code:400
        })
    }
    else{
        return res.json({
            message:'role is  removed succesfully',
            code:400,
            success:true
        })
    }
}

module.exports={
    addingRoleToUser,
    removeRoleToUser
}