const express = require('express');
const bodyParser = require('body-parser')
const app  = express();
const mongoose = require('mongoose');
const UserRoutes = require('./routes/user');
const CompanyRoutes = require('./routes/company');
const PackagesRoutes = require('./routes/packages');
const ExpensesRoutes = require('./routes/expenses');
const CustomerRoutes = require('./routes/customer');
const jwtToken =  require('./middlewares/jwtAuth');


mongoose.connect('mongodb://transpk:transpk222@ds121373.mlab.com:21373/projectmanagement')
.then(con => {
  console.log('database connected successfully');
}).catch(err =>{
  console.log(err);
})
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended : false}));

app.get('/check' ,jwtToken , async (req, res) =>{
  
  console.log(req.userId);
  console.log('checked');
})

app.use('/api/user',UserRoutes);
app.use('/api/company',CompanyRoutes);
app.use('/api/packages',PackagesRoutes);
app.use('/api/expenses',ExpensesRoutes);
app.use('/api/customers',CustomerRoutes);




const PORT = process.env.port || 7000;

app.listen(PORT , () =>{
  console.log(`server listening at port ${PORT}`);
})