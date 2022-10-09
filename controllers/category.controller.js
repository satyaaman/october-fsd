const categoryservice=require('../services/category.services');

const getallcategory=async(req,res)=>{
    const response=await categoryservice.getallcategory();
    return res.json({
        message:'succesfully fetched the category',
        code:200,
        succes:true,
        data:response
    })
}
const createcategory=async(req,res)=>{
    const response=await categoryservice.createcategory(req.body);
    return res.json({
        message:'succesfully created the category',
        code:200,
        succes:true,
        data:response
    })
}
const updateategory=async(req,res)=>{
    const response=await categoryservice.updateategory(req.params.id,req.body);
    return res.json({
        message:'succesfully updated the category',
        code:200,
        succes:true,
        data:response
    })
}
const deletecategory=async(req,res)=>{
    const response=await categoryservice.deletecategory(req.params.id);
    return res.json({
        message:'succesfully deleted the category',
        code:200,
        succes:true,
        data:response
    })
}
module.exports={
    getallcategory,
    createcategory,
    updateategory,
    deletecategory
}