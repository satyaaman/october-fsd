const productservice=require('../services/product.services');

const getallproduct=async(req,res)=>{
    const response=await productservice.getallproduct();
    return res.json({
        message:'succesfully fetched the product',
        code:200,
        succes:true,
        data:response
    })
}
const getallproductwithcategory=async(req,res)=>{
    const response=await productservice.getallproductwithcategory();
    return res.json({
        message:'succesfully fetched the product along with category',
        code:200,
        succes:true,
        data:response
    })
}

const createproduct=async(req,res)=>{
    const response=await productservice.createproduct(req.body);
    return res.json({
        message:'succesfully created the product',
        code:200,
        succes:true,
        data:response
    })
}
const updateproduct=async(req,res)=>{
    const response=await productservice.updateproduct(req.params.id,req.body);
    return res.json({
        message:'succesfully updated the product',
        code:200,
        succes:true,
        data:response
    })
}
const deleteproduct=async(req,res)=>{
    const response=await productservice.deleteproduct(req.params.id);
    return res.json({
        message:'succesfully deleted the product',
        code:200,
        succes:true,
        data:response
    })
}
module.exports={
    getallproduct,
    createproduct,
    updateproduct,
    deleteproduct,
    getallproductwithcategory
}