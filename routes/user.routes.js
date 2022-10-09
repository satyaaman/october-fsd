const usercontroller=require('../controllers/user.controller');

const routes=(app)=>{
    app.post('/ecom/oct/api/v1/signup',usercontroller.signinuser);

    app.post('/ecom/oct/api/v1/signinup',usercontroller.loginuser);
}
module.exports=routes;