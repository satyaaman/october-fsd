const categorycontroller=require('../controllers/category.controller');
const middlewares=require('../middlewares/uservalidator');
const routes=(app)=>{
    app.get('/ecom/oct/api/v1',categorycontroller.getallcategory);

    app.post('/ecom/api/v1/create',middlewares.isauthenticated,categorycontroller.createcategory);

    app.put('/ecom/api/v1/update/:id',categorycontroller.updateategory);
    
    app.delete('/ecom/api/v1/delete/:id',categorycontroller.deletecategory)
}

module.exports=routes;