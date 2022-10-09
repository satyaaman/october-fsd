const orderservice=require('../services/order.services');
const {status}=require('../config/order.constant');


const addProductToOrder=async(req,res)=>{
    try{
        let order=await orderservice.getorderByuser(req.user, status.CREATION);
        if(!order){
            order=await orderservice.createOrder(req.user);
        }
        let response=await orderservice.addProductToOrder(req.body.productId, order.id);
        if(response.error){
            return res.json({
                status: 400,
                success: true,
                message: response.error
            });
        }
        if(response){
            return res.json({
                status: 200,
                success: true,
                message: 'Successfully added product to order'
            });
        }
    }catch(err){
        console.log(err);
    }
    
}
const removeProduct = async(req, res) =>{
    let order = await orderservice.getorderByuser(req.user, status.CREATION);
    if(!order){
        return res.json({
            status: 400,
            success: true,
            message: 'No order for current user'
        });
    }
    
    const response = await orderservice.removeProductFromOrder(req.body.productId, order.id);

    if(!response){
        return res.json({
            status: 500,
            success: true,
            message: 'Internal server error'
        });
    }
    if(response.error){
        return res.json({
            status: 400,
            success: true,
            message: response.error
        });
    }
    return res.json({
        status: 200,
        success: true,
        message: 'Product removed from order successfully'
    });

}


module.exports={addProductToOrder,removeProduct}