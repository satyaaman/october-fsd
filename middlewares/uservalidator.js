const userservice=require('../services/user.services');
const roleservice=require('../services/role.service')

const isauthenticated=async(req,res,next)=>{

    const token=req.headers['x-access-token'];
    if(!token){
        return res.json({
            message:'token is missing',
            code:400,
            err:'again entered the token'
        })
    }
    else{
        const response=await userservice.verifytoken(token);
        if(!response){
            return res.json({
                message:'token is wrong',
                code:400,
                err:'again entered the token because it is wrong'
            })
        }
        const user=await userservice.getuserbyEmailid(response.email);
        if(!user){
            return res.json({
                message:'user is invalid',
                code:400,
                err:'again entered the token because its user is not detected'
            })
        }
        req.user=user;
    }
    next();
}

const checkadmin=async(req,res,next)=>{
    const isuser=await req.user;
    const isrole=await roleservice.getRolebyName('admin');
    const isadmin=await isuser.hasRole(isrole);
    if(!isadmin){
        return res.json({
            message:'user is not admin',
            code:401,
            err:'invalid admin'
        });
    }
    next();
}

const checkAdminOrSeller = async(req, res, next) =>{
    const user =  req.user;
    const adminRole = await roleservice.getRolebyName('admin');
    const sellerRole = await roleservice.getRolebyName('seller');
    const isAdmin = await user.hasRole(adminRole);
    const isSeller = await user.hasRole(sellerRole);
    if(!isAdmin && !isSeller){
        return res.json({
            status: 401,
            message: "User is not authorized",
            data: {},
            err: 'Not authorized'
        });
    }

    next();
}
module.exports={
    isauthenticated,checkadmin,checkAdminOrSeller
}