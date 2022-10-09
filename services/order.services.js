const {order,product,order_product}=require('../models/index');
const {status}=require('../config/order.constant')

const getorderByuser=async(user, orderStatus)=>{
    try{
        const myorder=await order.findOne({
            where:{
                userId:user.id,
                status:orderStatus
            }
        });
        return myorder;
    }catch(err){
        console.log(err);
    }
    }
    

const createOrder=async(user)=>{
    try{
        const myorder=await order.create({
            userId:user.id,
            status: status.CREATION,
        });
        return myorder;
    }catch(err){
        console.log(err);
    }
    
}

const addProductToOrder=async(productId,orderId)=>{
    try{
        const myOrder = await order.findByPk(orderId);
    
        const myProduct = await product.findByPk(productId);
        if(!myProduct){
            return {
                error: 'No such product found'
            }
        }
        const entry = await myOrder.addProduct(myProduct, {through : {quantity: 2}});
        return entry;
    }
    catch(err){
        console.log(err);
    }
}

const removeProductFromOrder = async(productId, orderId) => {
    try{
        const Order = await order.findByPk(orderId);
        if(Order.status !== status.CREATION){
            return {
                error: 'Order cannot be modified'
            }
        }
        const Product = await product.findByPk(productId);
        if(!Product){
            return {
                error: 'No such product found'
            }
        }

        const entry = await order_product.findOne({
            where: {
                orderId: Order.id,
                productId: Product.id
            }
        });
        if(!entry){
            return {
                error: 'No such product found in the order'
            }
        }
        else{
            if(entry.quantity <= 1){
                Order.removeProduct(Product);
            }
            else{
                await entry.decrement('quantity', {by: 1});
            }
        }
        return entry;
    }
    catch(err){
        console.log(err);
    }
}
module.exports={
    getorderByuser,createOrder,addProductToOrder,removeProductFromOrder
}