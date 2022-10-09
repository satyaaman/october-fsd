const productcontroller=require('../controllers/product.controller');

const routes=(app)=>{
    app.get('/ecom/oct/api/v1/product',productcontroller.getallproduct);

    app.get('/ecom/oct/api/v1/withcategoy',productcontroller.getallproductwithcategory);

    app.post('/ecom/api/v1/createproduct',productcontroller.createproduct);

    app.put('/ecom/api/v1/updateproduct/:id',productcontroller.updateproduct);
    
    app.delete('/ecom/api/v1/deleteproduct/:id',productcontroller.deleteproduct)
}

module.exports=routes;

