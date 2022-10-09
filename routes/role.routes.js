const rolecontroller=require('../controllers/role.controller');
const middlewares=require('../middlewares/uservalidator');

const routes=(app)=>{
    app.post('/ecomm/api/v1/addingroletouser',middlewares.isauthenticated,middlewares.checkadmin,rolecontroller.addingRoleToUser);

    app.delete('/ecomm/api/v1/removeroletouser',middlewares.isauthenticated,middlewares.checkadmin,rolecontroller.removeRoleToUser);

}
module.exports=routes;