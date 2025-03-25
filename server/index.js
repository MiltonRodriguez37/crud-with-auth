const express = require('express');
const connectDB = require('./config/db')
const app = express();

connectDB();

app.use(express.json())

app.use('/api/products', require('./routes/product'))

app.listen(4000, ()=>{
  console.log('El servidor está corriendo')
})