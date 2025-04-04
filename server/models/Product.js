const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now()
  },
});

module.exports = mongoose.model('Product', ProductSchema)