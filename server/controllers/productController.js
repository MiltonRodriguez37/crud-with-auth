const Product = require("../models/Product");

exports.createProduct = async (req,res) => {
  try {
    let product;
    product = new Product(req.body);
    await product.save();
    res.send(product);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.getProducts = async (req,res) => {
  try {
    const products = await Product.find();
    res.json(products);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.updateProduct = async (req,res) => {
  try {
    const {product, description, category, price, stock} = req.body;
    let productFound = await Product.findById(req.params.id);

    if(!productFound){
      return res.status(404).json({msg: 'No existe ese producto'})
    }

    productFound.product = product;
    productFound.description = description;
    productFound.category = category;
    productFound.price = price;
    productFound.stock = stock;

    productFound = await Product.findOneAndUpdate({_id:req.params.id},productFound, {new:true});

    res.json(productFound);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.getProduct = async (req,res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({msg:'No existe el producto'})
    }
    res.json(product);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}

exports.deleteProduct = async (req,res) => {
  try {
    let product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({msg:'No existe el producto'})
    }
    await Product.findOneAndDelete({_id:req.params.id});
    res.json({msg:'Producto eliminado'});

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error en el servidor.')
  }
}