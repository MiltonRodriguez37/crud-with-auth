const express = require('express');
const path = require('path');
const connectDB = require('./config/db')
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

connectDB();
app.use(cors());

app.use(express.json());

const staticPath = path.join(__dirname, '../frontend/dist/frontend/browser');
console.log('Serviendo archivos desde:', staticPath);

app.use(express.static(staticPath));
app.use('/assets', express.static(path.join(staticPath, 'assets')));

app.use('/api/products', require('./routes/product'))
app.use('/api/users', require('./routes/user'))

app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, ()=>{
  console.log('El servidor está corriendo');
  console.log('Variable MONGO_URI:', process.env.MONGO_URI?.substring(0, 25) + '...');
})
