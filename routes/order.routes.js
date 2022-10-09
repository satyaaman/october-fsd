const ordercontroller=require('../controllers/order.controllers');
const middlewares=require('../middlewares/uservalidator');

const routes=(app)=>{
    app.post('/ecomm/api/v1/addroduct',middlewares.isauthenticated,ordercontroller.addProductToOrder);

    app.patch('/ecomm/api/v1/removeproduct',middlewares.isauthenticated,ordercontroller.removeProduct);
}

module.exports=routes;