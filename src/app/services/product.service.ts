import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    listProducts: Product[] = [
      {product: 'Laptop HP Pavilion', description: 'Laptop con pantalla de 15.6", 8GB RAM, SSD 256GB, Intel Core i5.', category: 'Electrónicos', price: 699.99, stock: 15},
      {product: 'Balón de fútbol Adidas', description: 'Balón oficial tamaño 5, para partidos profesionales.', category: 'Deportes', price: 49.99, stock: 10},
      {product: 'Lego Classic', description: 'Set de 300 piezas para creatividad.', category: 'Juguetes', price: 29.99, stock: 20},

    ];

  constructor() { }

  getProducts(){
    return this.listProducts.slice()
  }
}
