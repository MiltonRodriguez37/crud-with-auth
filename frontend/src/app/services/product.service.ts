import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /* url = 'http://localhost:8080/api/products/'; */
  url = 'https://crud-angular-express.onrender.com/api/products/';
/*     listProducts: Product[] = [
      {product: 'Laptop HP Pavilion', description: 'Laptop con pantalla de 15.6", 8GB RAM, SSD 256GB, Intel Core i5.', category: 'Electrónicos', price: 699.99, stock: 15},
      {product: 'Balón de fútbol Adidas', description: 'Balón oficial tamaño 5, para partidos profesionales.', category: 'Deportes', price: 49.99, stock: 10},
      {product: 'Lego Classic', description: 'Set de 300 piezas para creatividad.', category: 'Juguetes', price: 29.99, stock: 20},

    ]; */

  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  deleteProduct(id:string):Observable<any>{
    return this.http.delete(this.url+id);
  }

  saveProduct(product:Product):Observable<any>{
    return this.http.post(this.url,product);
  }

  getProduct(id:string):Observable<any>{
    return this.http.get(this.url+id)
  }

  editProduct(id:string,product:Product):Observable<any>{
    return this.http.put(this.url+id,product)
  }
}
