const express = require('express');
const path = require('path');
const connectDB = require('./config/db')
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

connectDB();
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/dist/frontend/browser')));

app.use('/assets', express.static(path.join(__dirname, '../frontend/dist/frontend/browser/assets')));

app.use('/api/products', require('./routes/product'))
app.use('/api/users', require('./routes/user'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/frontend/browser/index.html'));
});

app.listen(port, ()=>{
  console.log('El servidor está corriendo')
})