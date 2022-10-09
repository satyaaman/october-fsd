const {category}=require('../models/index')

const getallcategory=async()=>{
    const response=await category.findAll();
    return response;
}
const createcategory=async(data)=>{
    const response=await category.create({
        name:data.name,
        cost:data.cost,
        description:data.description
    })
    return response;
}
const updateategory=async(id,data)=>{
    const response=await category.update({
        name:data.name,
        cost:data.cost,
        description:data.description
    },{
        where:{
            id:id
        }
    })
    return response;
}
const deletecategory=async(data)=>{
    const response=await category.destroy({
        where:{
            id:data
        }
    })
    return response;
}
module.exports={
    getallcategory,
    createcategory,
    updateategory,
    deletecategory
}