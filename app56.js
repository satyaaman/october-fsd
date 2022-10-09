const categoryRoutes=require('./routes/category.routes');
const productRoutes=require('./routes/product.routes');
const userRoutes=require('./routes/user.routes');
const roleRoutes=require('./routes/role.routes');
const orderRoutes=require('./routes/order.routes');

const bodyParser=require('body-parser');
const express=require('express');
const { sequelize } = require('./models');
const app=express();
//const{role}=require('./models/index')

const port=1111;
app.use(bodyParser.urlencoded({extended:true}));

categoryRoutes(app);
productRoutes(app);
userRoutes(app);
roleRoutes(app);
orderRoutes(app);

// const ROLE=[
//     {
//         name:'admin'
//     },
//     {
//         name:'seller'
//     },
//     {
//         name:'customer'
//     }
// ]

app.listen(port, async()=>{
    //await sequelize.sync();
    //const response=await role.bulkCreate(ROLE);
    //console.log(response);
    console.log('server is listening to port',port);
})