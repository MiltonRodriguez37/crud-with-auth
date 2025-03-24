import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../interfaces/product';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private toastr: ToastrService){
    this.form = this.fb.group({
      product: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      stock: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    })
  }

  addProduct(){

    const PRODUCT: Product = {
      product: this.form.get('product')?.value,
      description: this.form.get('description')?.value,
      category:  this.form.get('category')?.value,
      price:  this.form.get('price')?.value,
      stock:  this.form.get('stock')?.value,

    };
    console.log(PRODUCT);
    this.toastr.success('El registro del producto fue exitoso.', 'Producto registrado!',{positionClass:'toast-bottom-center'});
    this.router.navigate(['/dashboard/products'])
  }
}
