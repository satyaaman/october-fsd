
const {user,role} = require("../models/index");


const addingRoleToUser=async(userId,roleId)=>{
    const adduser=await user.findByPk(userId);
   
    const addrole=await role.findByPk(roleId);

    await adduser.addRole(addrole);
    return adduser;

}
const removeRoleToUser=async(userId,roleId)=>{
    const adduser=await user.findByPk(userId);
   
    const addrole=await role.findByPk(roleId);

    await adduser.removeRole(addrole);
    return adduser;

}

const getRolebyName=async(name)=>{
    const response=await role.findOne({
        where:{
            name:name
        }
    })
    return response;
}

module.exports={
    addingRoleToUser,
    removeRoleToUser,
    getRolebyName
}