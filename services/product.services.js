const {product,category}=require('../models/index')

const getallproduct=async()=>{
    const response=await product.findAll();
    return response;
}
const getallproductwithcategory=async()=>{
    const response=await product.findAll({include:category});
    return response;
}
const createproduct=async(data)=>{
    const response=await product.create({
        name:data.name,
        range:data.range,
        review:data.review,
        categoryId:data.categoryId

    })
    return response;
}
const updateproduct=async(id,data)=>{
    const response=await product.update({
        name:data.name,
        range:data.range,
        review:data.review,
        categoryId:data.categoryId
    },{
        where:{
            id:id
        }
    })
    return response;
}
const deleteproduct=async(data)=>{
    const response=await product.destroy({
        where:{
            id:data
        }
    })
    return response;
}
module.exports={
    getallproduct,
    createproduct,
    updateproduct,
    deleteproduct,
    getallproductwithcategory
}